const express=require('express')
const router=express.Router()

const{testData}=require('../controllers/testController')
router.route('/test').get(testData);

module.exports=router;