const express = require("express")
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect("mongodb://localhost:27017/blogs",{
    useNewUrlParser:true, useUnifiedTopology:true
})

app.set('view engine', "ejs")


app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    const articles = [{
        title: "test article",
        createdAt: new Date(),
        description: "test description"
    },
    {
        title: "test article2",
        createdAt: new Date(),
        description: "test description2"
    }]
    res.render("articles/index", {articles: articles})
})
app.use("/articles", articleRouter)
app.listen(5000)