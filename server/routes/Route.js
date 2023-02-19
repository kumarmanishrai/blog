module.exports = (app)=>{

    const usercontroller = require('../controller/UserController');
    const blogcontroller = require('../controller/BlogController');

    app.post('/signup', usercontroller.signup)
    app.post('/login', usercontroller.login)
    app.post('/createblog', blogcontroller.createblog)
    app.get('/getallblogs', blogcontroller.getallblogs)
    app.get('/getblog/:blogId', blogcontroller.getblog)
    app.delete('/deleteblog/:blogId', blogcontroller.deleteblog)
    // app.put('/updateblog/:blogId', blogcontroller.updateblog)
}