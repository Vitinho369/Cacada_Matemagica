export default class Question {
  constructor() {
    this.number1 = 0;
    this.number2 = 0;
    this.operation = '';
    this.result = 0;
  }

  generateOperation() {
    let operation = Math.floor(Math.random() * 10);

    switch (operation) {
      case 1:
        this.operation = '+';
        break;

    }
  }
}