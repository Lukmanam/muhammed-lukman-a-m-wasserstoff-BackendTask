
// Api type Checker whether REST || GraphQL || gRPC

export const apiTypeChecker = (req, res, next) => {
    console.log("checking APType");
    const apiType = req.headers['api-type'];
    console.log(apiType);
    if (apiType === 'REST' || apiType === 'GraphQL' || apiType === 'gRPC') {
        req.apiType = apiType;
        } else {
            req.apiType = 'REST'
            }
    next();
};
