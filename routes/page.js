const express=require('express');
const paslaugos=require('./../modules/paslaugos');
const registracija=require('./../modules/registracija');

const router=express.Router();

router.get('/', (req,res, next)=>{
    res.render('index',{
    title : 'Automobilių remontas',

});
});

router.get('/paslaugos', (req,res,next)=>{
const remPaslauga = paslaugos.getPaslaugos();
  res.render('paslaugos', {
      title : 'Automobilių remonto paslaugos',
   paslaugos: remPaslauga
  });
});


router.get('/registracija', (req,res,next)=>{
   //const remRegistr=registracija.getRegistracija();
   res.render('registracija',{
        title : 'Registruokites remontui',
     // registracija: remRegistr
   });
});

router.post('/registracija', (req,res,next)=>{
    //console.log(req.body);
    registracija.addRegistracija(req.body.name, req.body.phone, req.body.carmanuf, req.body.carmodel, req.body.caryear, req.body.reapairdate, req.body.text);
    res.redirect('/registracija');
});


router.get('/uzsakymai', (req, res, next)=>{
    const remRegistr=registracija.getRegistracija();
    res.render('admin/uzsakymai',{
        title : 'Uzsakymai',
          registracija: remRegistr
    });      
});


router.get('/kontaktai', (req, res, next)=>{
    res.render('kontaktai');
});



module.exports=router;