import express from "express";

const app = express ()

app.get("/", (req,res) => {
    res.status(200).json({
        message : "OK"
    })
})

app.listen(3000, () => {
    console.log("app berjalan di http://localhost:3000");
})