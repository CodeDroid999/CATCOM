const express = require("express")
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', "ejs")

app.use("/ articles", articleRouter)

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
app.listen(5000)