const Product= require('../models/product')

// create new product => api/v1/product/new

exports.newProduct=async (req, res, next)=>{
    const product= await Product.create(req.body);

    res.status(201).json({
        sucess:true,
        
    })
}


exports.getProducts= async (req,res,next)=>{
    const product= await Product.find()
    res.status(200).json({
        sucess:true,
        product
    })

}