export type Operator = "add" | "sub" | "multiply" | "div" | "pow";

export type OperatorsMap = {
    [key in Operator]: (num1: number, num2: number) => number;
};