var mongoose = require('mongoose');

const connectDatabase=()=>{

    mongoose.connect(process.env.DB_LOCAL_URI, {
    // to supress warning errors 
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(con=>{
console.log(`mongodb database connected with the host  ${con.connection.host}`)
    })
}

module.exports=connectDatabase