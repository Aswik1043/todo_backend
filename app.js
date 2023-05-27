const express = require('express')
const app = express()
const PORT = 3500
const todo_items = require("./routers/todo_items")
app.get('/',(request,response)=>{
    response.send('working');
});
app.use('/api/v1/todo_items', todo_items)
app.listen(PORT,console.log('server runs at http://localhost:3500/'))