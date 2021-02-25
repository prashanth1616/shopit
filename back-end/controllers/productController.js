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

// get single product data => api/v1/product/:id

exports.getSingleProduct= async (req,res,next)=>{
const product= await Product.findById(req.params.id);

if(!product){
    return res.status(404).json({
        success:false,
        message: 'Product not found'
    })
}

res.status(200).json({
    success:true,
    product
})

}

// update product
exports.updateProduct= async (req,res,next)=>{
    let product= await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message: 'Product not found'
        })
    }
    product=await Product.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
}


exports.deleteProduct= async (req,res,next)=>{
    let product= await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message: 'Product not found'
        })
    }
    product=await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success:true,
        product
    })
}