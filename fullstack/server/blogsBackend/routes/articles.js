const express = require("express")
const Article = require('./../../models/article')
const router = express.Router()
router.get('/createNew', (req, res) => {
    res.render("articles/createNew")
})

router.get('/:id', (req, res) => {

})
router.post('/', async (req, res) => {
    const article = new Article({
       title: req.body.title,
       description: req.body.description,
       markdown: req.body.markdown
    })
    try{
    article = await article.save()
    res.redirect(`/articles/$[article.id]`)
    } catch (e) {
        res.render('article/new', {article: article} )

    }
})

module.exports = router