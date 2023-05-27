const express = require('express')
const router = express.Router()
const{getAllToDoItems}=require('../controllers/todo_items')
router.get("/",getAllToDoItems)

//router.get('/api/v1/',(request,response)=>{
    //response.send('List of the item')
//});
module.exports = router;