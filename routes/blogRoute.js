const { homePage, createForm, createBlog, singleBlog, deleteBlog } = require('../controller/blogController')

const router = require('express').Router()


router.route("/").get(homePage)
router.route("/blog/:id").get(singleBlog)
router.route("/delete/:id").get(deleteBlog)
router.route("/create").get(createForm).post(createBlog)





module.exports = router 