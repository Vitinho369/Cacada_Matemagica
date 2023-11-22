export default class Question {
 
  constructor() {
    this.number1 = this.generateNumber();
    this.number2 = this.generateNumber();
    this.operation = this.generateOperation();
    this.result = this.generateResult();
  }
  
  //Gera um número aleatório dentro de uma faixa de 0 a 20
  generateNumber() {
    return parseInt(Math.random() * (20 - 1 + 1) + 1);
  }

  //Gera uma operação de forma aleatória
  generateOperation() {
    let operations = ["+", "-", "*", "/"];
    let operation = operations[Math.floor(Math.random() * operations.length)];
    return operation;
  }

  /*Verifica se a operação gerada é complicada para a faixa etária que é o público alvo do jogo, 
  se for, são gerados novos operandos*/
  verifyResult(operation){
    switch(operation){
      case "+":
        while((this.number1 + this.number2) > 100){
          this.number1 = this.generateNumber();
          this.number2 = this.generateNumber();
        }
      case "-": 
      while(this.number1 < this.number2){
        this.number1 = this.generateNumber();
        this.number2 = this.generateNumber();
      }
      case "*":
        while((this.number1 * this.number2) > 100){
          this.number1 = this.generateNumber();
          this.number2 = this.generateNumber();
        }
      case "/":
        while(this.number1 < this.number2){
          this.number1 = this.generateNumber();
          this.number2 = this.generateNumber();
        }
    }
  }

  //Gera o resultado a partir dos operandos gerados aleatoriamente, após serem corrigidos se necessário
  generateResult() {
    this.verifyResult(this.operation);
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

  //Retorna o problema da questão, operandos e operação, em forma de texto
  getQuestion() {
    return this.number1 + this.operation + this.number2;
  }

  //Retorna o resultado da questão
  getResult() {
    return this.result;
  }
}
