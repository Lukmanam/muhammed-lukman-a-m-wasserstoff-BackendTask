import { logger } from "../utils/logger.js";
import { config } from "../config/config.js";
import QueueManager from "../queues/queueManager.js";
import { createProxyMiddleware } from "http-proxy-middleware";




const queueManager = new QueueManager();

export const dynamicRouter = (req, res, next) => {
    const payLoadsize = JSON.stringify(req.body).length;
    console.log(req.body, "this is body");
    console.log(payLoadsize);
    const startTime = Date.now();
    let targetServer = '';


    switch (req.apiType) {

        case 'REST':
            targetServer = payLoadsize < 100 ? '/fast' : getRandomServer(['/fast', '/slow']);
            break;

        case 'GraphQL':
            targetServer = config.servers.graphql;
            break;

        case 'gRPC':
            targetServer = config.servers.grpc;
            break;
        default:
            req.apiType = 'REST'
            targetServer = config.servers.fast;

    }

    logger.info(`Routing to ${targetServer} with payloadsize ${payLoadsize}  and api type ${req.apiType}`);
    req.url = targetServer;


    // Adding a request to appropriate Queue
    queueManager.addRequestToQueue(req.apiType, req);



    //duration for each request
    const duration = Date.now() - startTime;
    logger.info(`Request proceed in${duration}ms`);
    next();


    // Proxy the request to the target server
    const proxy = createProxyMiddleware({ target: targetServer, changeOrigin: true });
    return proxy(req, res, next);


}

function getRandomServer(endPoints) {
    return endPoints[Math.floor(Math.random() * endPoints.length)]
}

