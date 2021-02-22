const app =require('./app')
const dotenv=require('dotenv');
const connectDatabase=require('./config/database')

dotenv.config({path:'back-end/config/config.env'})

// connecting to database
connectDatabase()

app.listen(process.env.PORT,() => {
console.log(`Server started listening on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})