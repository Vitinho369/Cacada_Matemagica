export default class Question {
  constructor() {
    this.number1 = this.generateNumber();
    this.number2 = this.generateNumber();
    this.operation = this.generateOperation();
    this.result = this.generateResult();
  }
  generateNumber() {
    return parseInt(Math.random() * (20 - 1 + 1) + 1);
  }
  generateOperation() {
    let operations = ["+", "-", "*", "/"];
    let operation = operations[Math.floor(Math.random() * operations.length)];
    return operation;
  }
  generateResult() {
    switch (this.operation) {
      case "+":
        return this.number1 + this.number2;
      case "-":
        return this.number1 - this.number2;
      case "*":
        return this.number1 * this.number2;
      case "/":
        return parseInt(this.number1 / this.number2);
    }
  }

  writeOperation() {
    return this.number1 + this.operation + this.number2;
    // return `${this.number1} ${this.operation} ${this.number2}`;
  }

  getResult() {
    return this.result;
  }
}
