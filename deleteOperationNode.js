//  delete req handler

userExpressApp.delete('/remove/:name',(req, res)=>{

    console.log(req.params);
    //convert string into "eno" to number
    // let empno=(+req.params.eno);
   let name1=(req.params.name);
   console.log('this is the empno',name1)
    //delete using empno
    dbo.collection("empcollecion").deleteOne({name:req.params.name},(err,result)=>{
        if(err)
        {
            console.log("err in delete",err);
        }
        else{
            res.send({message:"emp remove"});
        }
    })
})