import { Operator, OperatorsMap } from '../interfaces/operator.interface'

export class CalcService {
    /**
     * use object literals data type
     */
    private static readonly oprations: OperatorsMap = {
        add: (n1, n2) => n1 + n2,
        sub: (n1, n2) => n1 - n2,
        multiply: (n1, n2) => n1 * n2,
        // the api validators will guard for dividing by zero , no need to handle it here
        div: (n1, n2) => n1 / n2,
        pow: (n1, n2) => Math.pow(n1, n2)
    }
    /**
     * calculate the result for the arithmethic operation
     */
    public static calc(num1: number, num2: number, operator: Operator): number {
        const calculate = this.oprations[operator]
        return calculate(num1, num2)
    }

}