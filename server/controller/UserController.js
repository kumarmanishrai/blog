const User = require('../model/UserSchema')

exports.signup = (req, res) => {
    console.log(req.body)
    if(!req.body.name || !req.body.email || !req.body.password){
        res.status(404).send({ message: "Please enter required fields"})
        return 
    }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    user.save()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send({message: err.message})
    })
}

exports.login = (req, res) => {
    console.log(req.body);
    if(!req.body.email || !req.body.password){
        res.send({message: 'Please enter required fields'})
        return 
    }
    const email = req.body.email
    const password = req.body.password

    User.findOne({email, password}, (err, user) => {
        if(err) throw err;
        if(user){
            console.log("User found");
            res.send("user logged in successfully")
        }else{
            console.log("User not found");
        }
    })
}