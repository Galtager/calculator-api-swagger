import express, { Request, Response } from 'express'
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validateRequest } from '../middlewares/validate-request';

const router = express.Router()

const validators = [
    body('email').isEmail().withMessage('Email must be valid')
]

router.post('/auth', validators, validateRequest, async (req: Request, res: Response) => {

    const { email } = req.body;
    // Generate JWT
    const token = jwt.sign({ email }, process.env.JWT_KEY!, { expiresIn: "1800s" })


    return res.status(201).json({ message: "You are logged in", token });
})

export default router  
