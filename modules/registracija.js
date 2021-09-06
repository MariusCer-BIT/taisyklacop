const fs=require('fs');

const getRegistracija=()=>{
   const data=fs.readFileSync('./data/registracija.json').toString();
   const registracija=JSON.parse(data);
   return registracija;
};

const addRegistracija=(name, phone, carmanuf, carmodel, caryear, reapairdate, text)=>{
    let registracija=getRegistracija();
  
    
    registracija.push({
        name:name,
        phone:  phone,
  carmanuf: carmanuf,
  carmodel: carmodel,
  caryear: caryear,
  reapairdate: reapairdate,
        text:text
    });
   
    fs.writeFileSync('./data/registracija.json', JSON.stringify(registracija));
};

module.exports={getRegistracija, addRegistracija};