import express, { Request, Response } from 'express'
import { body, header } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';
import { requireAuth } from '../middlewares/require-auth';
import { Operator } from '../interfaces/operator.interface';
import { CalcService } from '../services/calculator';

const router = express.Router()
// dictonary for header validation
const operators: Operator[] = ["add", "sub", "multiply", "div", "pow"]
// input validations for body and headers
const validators = [
    header('op').exists().withMessage('operation is Requiered')
        .isString().isIn(operators).withMessage('wronge operation provided'),
    body('num1').isNumeric().withMessage('number1 must be valid'),
    body('num2').isNumeric().withMessage('number2 must be valid')
        .custom((num2, { req }) => num2 !== 0 || req.headers!.op !== 'div').withMessage('Cant divide number with 0.')
]


router.post('/calc', requireAuth, validators, validateRequest, (req: Request, res: Response) => {
    const { num1, num2 } = req.body;
    const { op } = req.headers;
    // calculate the result 
    // op is set as Operator due to the validators
    const result = CalcService.calc(num1, num2, op as Operator);

    res.status(200).send({ result });
})


export default router  