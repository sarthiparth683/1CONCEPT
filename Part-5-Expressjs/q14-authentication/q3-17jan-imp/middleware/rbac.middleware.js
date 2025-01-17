const rbac = (roleArray) => {
    return (req,res,next)=>{
        if(roleArray.includes(req.role)){
            next()
        } else {
            res.json({msg:"You are not authorized!"})
        }
    }
}

module.exports = {rbac}