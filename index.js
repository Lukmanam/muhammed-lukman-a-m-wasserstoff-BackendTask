import express from 'express';
import { config } from './src/config/config.js';
import router from './src/routes/apiRoutes.js';

// const app=express();
// app.use(express.json())
// app.use(express.urlencoded({extended:true}));
// app.use('/',router)
// app.listen(config.port,()=>{
//     console.log(`server started at ${config.port}`)
// }) 

const createServer = (port) => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/', router);
    app.listen(port, () => {
        console.log(`Server started at port ${port}`);
    });
    return app;
};



// Start the main server
createServer(config.port);

// Start the fast API server
createServer(config.fast);

// Start the slow API server
createServer(config.slow);

// Start the gRPC API server
createServer(config.grpc);

// Start the GraphQL API server
createServer(config.graphql);




// app.listen(config.fast,()=>{
//     console.log(`server started at ${config.fast}`);
// })

// app.listen(config.slow,()=>{
//     console.log(`server started at ${config.slow}`);
// })
// app.listen(config.grpc,()=>{
//     console.log(`server started at ${config.grpc}`);
// })
// app.listen(config.graphql,()=>{
//     console.log(`server started at ${config.graphql}`);
// })