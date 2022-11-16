exports.responseApi = (res, statusNum,{successmsg,message, todos:[a] }) =>
{
    res.status(statusNum).json({
        success: successmsg,
        message: message,
        todos : [a]
        
        })
    }