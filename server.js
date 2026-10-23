const express=require('express');

const app=express();

app.get('/', (req,res)=>{
    res.send('Hello world _updated version');
});

app.listen(3000,()=>{
    console.log('server running on port 3000');
});
//merge the feature app branch into the main branch . 
// verify tht the changes are successful merged and push the updated branch to github