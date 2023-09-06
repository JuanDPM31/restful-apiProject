const express = require('express')// Para incluir el framework
const app = express(); //Instancoa deñ framework Express
const bodyParse = require('body-parser')
const morgan = require('morgan')
//Validamos eu no estemos en el ambiente de produccion
if(process.env.NODE_ENV != 'production'){
    // se carga la configuracion de archivo .env al process.env
    require('dotenv').config()
}
app.set('port', process.env.PORT || 4000)

//Middlewares
app.use(bodyParse.urlencoded({extended:false}))//Recibir datos formulario sencillos
app.use(bodyParse.json())//Para recibir json
app.use(morgan('dev'))
app.use('/api/v1/users', require('./api/v1/routes/user.routes'));
app.use('/api/v1/articles', require('./api/v1/routes/articles.routes'));
app.use('/api/v1/category', require('./api/v1/routes/category.routes'));
app.get('/api/v1/test',(req,res)=>{
    res.send('HOLA ADSO !!!!!!!!!!!!!')
})
//app.get('/',(req,res)=>{
//    console.log("ruta ppal");
//    res.send({title:'Ruta Principal',message:'acceso a la ruta ppal'})
//});
app.listen(app.get('port'),()=>{
    console.log(`Server running on localhost:${app.get('port')}`);
})

