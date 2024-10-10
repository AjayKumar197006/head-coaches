const sql=require("mysql2")
require("dotenv").config()

const con=sql.createConnection(
    {
        host:process.env.host,
        port:process.env.port,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database
    }
)

function getAllHeadCoaches()
{
    return new Promise(function(success,reject)
{
    con.query(`select * from Head_Coaches`,function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}

function getHeadCoach(nu)
{
    return new Promise(function(success,reject)
{
    con.query('select * from Head_Coaches where Number=?',[nu],function(err,res)
{
    if(err)
    {
        reject(res)
    }
    else
    {
        success(res)
    }
})
})
}


function addHeadCoach(nu,co,na)
{
    return new Promise(function(success,reject)
{
    con.query(`insert into Head_Coaches values(?,?,?)`,[nu,co,na],function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}

function updateHeadCoach(nu,co,na,nu1)
{
    return new Promise(function(success,reject)
{
    con.query(`update Head_Coaches set Number=?,Country=?,Name=? where Number=?`,[nu,co,na,nu1],function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}


function deleteHeadCoach(nu1)
{
    return new Promise(function(success,reject)
{
    con.query(`delete from Head_Coaches where Number=?`,[nu1],function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}


module.exports={getAllHeadCoaches,getHeadCoach,addHeadCoach,updateHeadCoach,deleteHeadCoach}