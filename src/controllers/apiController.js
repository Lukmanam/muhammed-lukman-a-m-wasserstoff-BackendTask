// Mock Api end points

// Fast api

export const fastApi=(req,res)=>{
    setTimeout(()=>{
        res.send("fast Api")
    },100)
};


// Slow Api
export const slowApi=(req,res)=>{
    setTimeout(()=>{
        res.send("slow Api")
    },3000)
};


// GraphQl Api
export const graphqlAPI=(req,res)=>{
        res.send("Graphql api")
}


// gRPC Api
export const grpcAPI=(req,res)=>{
    res.send("gRPC api")
}
