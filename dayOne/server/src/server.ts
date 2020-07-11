import express from 'express'

const app = express();
app.get('/users',(req, res)=>{
  console.log("e ai")
  res.json([
    'Gordon',
    'Ronin',
    'Roben',
    'Samurai'
  ])
})
app.listen(3333)

