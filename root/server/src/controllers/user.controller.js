const express = require("express")
const User = require("../models/userSchema")
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const authenticate = require("../routes/auth1")

router.get('', (req, res) => {
    res.send("hello world")
})

router.post('/register', async (req, res) => {
    //  const user = await User.create(req.body);
    // console.log(req.body)
    //  res.status(201).send(user)
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(422).json({ error: "plz filled the field properly" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        const user = new User({ name, email, password });

        await user.save();
        // res.status(201).json({message: "User register successfully"})
        res.status(200).send(user)
    }
    catch (err) {
        console.log(err)
    }

})


//login route
router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
         if ( !email || !password) {
        return res.status(400).json({ error: "plz filled the data" });
        }
        
        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })
        if (!isMatch) {
             res.status(400).json({message: "Inavalid credentials"})
        } else {
             res.status(200).json({message: "User Sign In successfully"})
        }
        }
        else {
             res.status(400).json({message: "Inavalid credentials"})
        }
        
       

    } catch(err) {
        console.log(err)
    }
})


////about route 
// router.get("/about", authenticate, (req, res) => {
//     console.log("Helloo");
//     res.send("Hello about")
// } )


module.exports = router;