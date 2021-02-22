const express=require('express');
const app =express();
app.use(express.json());
// import routes

const products=require('./routes/product');
app.use('/api/v1',products)

const test=require('./routes/test');
app.use('/api/v1',test)


module.exports=app