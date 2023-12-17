const express = require('express'); 
const app = express(); 
const users = [ 
    { 
        "name": "bag", 
        "id": 1, 
        "price": 100, 
        "count": 5 
    }, 
    { 
        "name": "t-shirt", 
        "id": 2, 
        "price": 500, 
        "count": 2 
    }, 
    { 
        "name": "sweatshirt", 
        "id": 3, 
        "price": 1000, 
        "count": 50 
    }, 
    { 
        "name": "shoes", 
        "id": 4, 
        "price": 600, 
        "count": 52 
    }, 
    { 
        "name": "jeans", 
        "id": 5, 
        "price": 100, 
        "count": 1 
    }, 
    { 
        "name": "shirt", 
        "id": 6, 
        "price": 100, 
        "count": 5 
    }, 
    { 
        "name": "trausers", 
        "id": 7, 
        "price": 1200, 
        "count": 70 
    }, 
    { 
        "name": "bag", 
        "id": 8, 
        "price": 400, 
        "count": 4 
    }, 
    { 
        "name": "ring", 
        "id": 9, 
        "price": 100, 
        "count": 3 
    }, 
    { 
        "name": "hat", 
        "id": 10, 
        "price": 120, 
        "count": 0 
    }, 
    
] 
app.get('/', (req,res)=>{ 
    res.send(users) 
}) 
 
app.get('/:id', (req,res)=>{ 
    const userID = req.params.id; 
    const selectedUser = users.find(user=>user.id == userID) 
    if(selectedUser){ 
 
        res.send(selectedUser) 
    }else{ 
        res.status(404).send('istifadeci yoxdur') 
    } 
}) 
 
app.listen(3000, ()=>{ 
    console.log("server quruldu"); 
})