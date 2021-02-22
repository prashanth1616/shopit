var mongoose = require('mongoose');
const productSchema=new mongoose.Schema({
        name:{
            type:String,
            required:[true,'Please Enter product name'],
            trim:true,
            maxLength:[100,'Product name cannot exceed 100 characters']
        },
        price:{
            type:Number,
            required:[true,'Please Enter product price'],
            trim:true,
            maxLength:[5,'Product name cannot exceed 5 characters'],
            default:0.0
        },
        description:{
            type:String,
            required:[true,'Please Enter product description'],
        },
        ratings:{
            type:Number,
            default:0.0
        },
        images:[
            {
                public_id:{
                    type:String,
                    required:true
                },
                url:{
                    type:String,
                    required:true
                }
        }
    ],
    category:{
        type:String,
        required:[true,'Please select product category'],
        enum:{
            values:[
                'Electronics',
                'Cameras',
                'Laptops',
                'Accesories',
                'HeadPhones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message:'Please select valid category for this product'        }
    },
    seller:{
        type:String,
        required:[true,'Please enter product seller'],

    },
    stock:{
        type:Number,
        required:[true,'Please enter product stock'],
        maxLength:[5,'Product cannot exceed 5 characters'],
        default:0
    },
    noOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            ratings:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model('product', productSchema);