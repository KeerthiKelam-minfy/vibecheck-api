import express from "express";
import bcrypt from "bcrypt";

import User from "../models/User.js";

const router = express.Router()

//SignUp
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await user.save()
        res.status(201).json({ success: true, message: 'User created', userId: savedUser._id })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
})


//Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if(!user) {
            return res.status(404).json({success: false, message: "User not found!"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(401).json({success: false, message: "Invalid password"})
        }

        res.status(200).json({success: true, message: "Login successful", userId: user._id})
    } catch(error) {
        res.status(500).json({success: false, message: err.message})
    }
})

export default router;