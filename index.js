// const express = require('express')

import express from 'express'
const app = express()
// const port = 3000

 const port=process.env.port ||3000
 
app.get('/product',(req,res)=>{
console.log(req.query)
const {category,id}=req.query
res.send(`respond ok ${category}and ${id}`)

})


// app.get('/product',(req,res)=>{
// console.log(req.query)
//  res.send(`ok ${req.query.category} and ${req.query.id}`) 
// })


//  app.param('id',(req,res,next,id)=>{
// console.log(`id:${id}`) 
// next()
//  })

   
  
   
// app.get('/user/:id',(req,res)=> {  
//   console.log('next model')
// res.send('response')
//  } )


// app.get('/ab?cd',(req,res)=>{
// res.send('mehepur11abcd') 
// })
// app.all('/api/*',(req,res)=>{
// res.send('not found') 
// })

app.get(/a/ ,(req,res)=>{
res.send('mehepur-A') 
})

//  app.get('/cbexample',(req,res,next)=>{
// console.log('fast callback');
// next()
//  },(req,res)=>{
// console.log('second callback');

//  res.send('example') 
//  })

const cb1=(req,res,next)=>{
console.log(' callback -cb1'); 
next()
}
const cb2=(req,res,next)=>{
console.log('second callback');
next()
}

const cb3=(req,res)=>{
  console.log('third callback');
res.send('example-cb3,,,,,,......') 
}

app.get('/cbexample3',[cb1,cb2,cb3])

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})