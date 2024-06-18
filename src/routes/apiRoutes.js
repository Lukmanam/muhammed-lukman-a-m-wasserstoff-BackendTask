import express from 'express';
import { fastApi, slowApi,graphqlAPI,grpcAPI } from '../controllers/apiController.js';
import { dynamicRouter } from '../middleware/dynamicRouter.js';
import { apiTypeChecker } from '../middleware/apiTypeChecker.js';

const router = express.Router();


router.use(apiTypeChecker);

router.post('/route',dynamicRouter,(req,res)=>{
    res.redirect(req.url)
});


router.get('/fast', fastApi);
router.get('/slow', slowApi);
router.get('/graphql', graphqlAPI);
router.get('/grpc', grpcAPI);



router.post('/graphql-endpoint',(req,res)=>{
res.send('GraphQl Endpoint Response');
});

router.post('/grpc-endpoint',(req,res)=>{
res.send('gRPC end point response');
});



export default router;