const tratoP = require('../models/trado(pendiente).model');
const tratoC= require('../models/trato(Confirmado).model');


function mostrarTratos(req,res){
    var user = req.user.sub;
    tratoC.findOne({Usuario1:user},(err,userfinded)=>{
        if(err){
            return res.status(500).send({mensaje:'error en la peticion'})
        }else if (!userfinded){
                    tratoC.findOne({Usuario2:user},(err,userfinded2)=>{
                        if(err){
                            return res.status(500).send({mensaje:'error en la peticion'})
                        }else if(userfinded2){
                            return res.status(200).send({mensaje:'se encontro el traro',userfinded2})
                        }
                    })
        }else{
            return res.status(200).send({mensaje:'se encontro el traro',userfinded})
        }
    })
}

function mostrarTratosP(req,res){
    var user = req.user.sub;
    tratoP.findOne({Usuario1:user},(err,userfinded)=>{
        if(err){
            return res.status(500).send({mensaje:'error en la peticion'})
        }else if (!userfinded){
            tratoP.findOne({Usuario2:user},(err,userfinded2)=>{
                        if(err){
                            return res.status(500).send({mensaje:'error en la peticion'})
                        }else if(userfinded2){
                            return res.status(200).send({mensaje:'se encontro el traro',userfinded2})
                        }
                    })
        }else{
            return res.status(200).send({mensaje:'se encontro el traro',userfinded})
        }
    })
}



module.exports ={
    mostrarTratos,
    mostrarTratosP,
    
}