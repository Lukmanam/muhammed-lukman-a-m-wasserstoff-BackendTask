export const config={
    port:8080,
    fast:8081,
    slow:8082,
    graphql:8083,
    grpc:8084,

    servers:{
              fast: 'http://localhost:8081',
              slow: 'http://localhost:8082',
              graphql: 'http://localhost:8083',
              grpc: 'http://localhost:8084',
            }, 
};