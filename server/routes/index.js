const express=require('express');
const router=express.Router();
const homeControl=require('../controller/home_controller');

// router.get('/',homeControl.home);
router.get('/get-data',homeControl.home)
router.post('/create-list',homeControl.saveData);
router.delete('/delete/:id',homeControl.erase);

module.exports=router;