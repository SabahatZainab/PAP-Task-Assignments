exports.responseApiFalse = (res,statusNum,{successmsg,message}) =>
{
    res.status(statusNum).json({
        success: successmsg,
        message: message
        
      })
}
exports.responseApiTrue = (res, statusNum,{successmsg,message, todos:[a] }) =>
{
    res.status(statusNum).json({
        success: successmsg,
        message: message,
        todos : [a]
        
        })
}
exports.responsePost = (res,statusNum,{successmsg,message,todos: [a]}) =>
{
    res.status(statusNum).json({
        success: successmsg,
        message: message,
        todos : [a]
        
        })

}
exports.responsePut = (res,statusNum,{successmsg,message,todos: [a]}) =>
{
    res.status(statusNum).json({
        success: successmsg,
        message: message,
        todos : [a]
        
        })
}
exports.responsePatch = (res,statusNum,{successmsg,message,todos: [a]}) =>
{
    res.status(statusNum).json({
        success: successmsg,
        message: message,
        todos : [a]
        
        })
}
exports.responseDelete = (res,statusNum,{successmsg,message}) =>
{
    res.status(statusNum).json({
        success: successmsg,
        message: message
        
      })
}