const express=require("express")
const db=require("./db")
const cors=require("cors")


const app=express()
app.use(express.json())
app.use(cors())

app.get("/head-coaches",(req,res)=>
{
    db.getAllHeadCoaches()
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})

app.get('/head-coaches/:id',(req,res)=>
    {
        const id=req.params.id
        db.getHeadCoach(id)
        .then((data)=>
        {
            res.send(data)
        })
        .catch((err)=>
        {
            res.send(err)
        })
    })

app.post('/head-coach',(req,res)=>
{
    db.addHeadCoach(req.body.Number,req.body.Country,req.body.Head_Coach)
    .then((data)=>
    {
        console.log(req.body.Number)
        console.log(req.body.Country)
        console.log(req.body.Head_Coach)
        res.send(data)
        console.log(data)
    })
    .catch((err)=>
    {
        res.send(err)
        console.log(err)
    })
})

app.put('/head-coach/:id',(req,res)=>
{
    const id=req.params.id
    db.updateHeadCoach(req.body.Number,req.body.Country,req.body.Name,id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})

app.delete('/head-coach/:id',(req,res)=>
{
    const id=req.params.id
    db.deleteHeadCoach(id)
    .then((data)=>
    {
        res.send(data)
    })
    .catch((err)=>
    {
        res.send(err)
    })
})

app.listen(8000,(req,res)=>
{
    console.log("server started")
})