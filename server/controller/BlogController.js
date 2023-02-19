const Blog = require('../model/BlogSchema')

exports.createblog = (req, res) => {
    if(!req.body.title || !req.body.tags || !req.body.description){
        res.status(404).send({ message: 'Please enter details'})
        return 
    }

    const blog = new Blog({
        title : req.body.title,
        tags : req.body.tags,
        description : req.body.description
    })
    blog.save()
        .then(data => res.send(data))
        .catch(err => res.send(err))
}

exports.getallblogs = (req, res) => {
    Blog.find()
        .then(blogs => {
            res.send(blogs)
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
}

exports.getblog = (req, res) => {
    console.log(req.params);
    Blog.findById(req.params.blogId)
        .then(blog => {
            if(!blog){
                return res.status(404).send({ message:"Blog not found"})
            }
            res.send(blog)
        })
        .catch(err => {
            return res.status(500).send({ message: err.message })
        })
}

exports.deleteblog = (req, res) => {
    console.log(req.params);
    Blog.findByIdAndDelete(req.params.blogId)
        .then(blog => {
            if(!blog){
                return res.status(404).send({ message:"Blog not found"})
            }
            res.send({message: "Blog deleted successfully"})
        })
        .catch(err => {
            return res.status(500).send({ message: err.message || "some error occured" })
        })
}