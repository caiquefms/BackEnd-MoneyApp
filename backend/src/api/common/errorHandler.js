const _ = require('lodash');

module.exports = (req,res, next)=>{
    const bundle = res.locals.bundle;
    


    if(bundle.errors){
        const errors = parserErros(bundle.errors)
        res.status(500).json({errors});
    }else{
        next();
    }

}

const parserErros = (nodeRestfulErrors)=>{
    const errors = [];
    _.forIn(nodeRestfulErrors,error=>errors.push(error.message));
    return errors;
}