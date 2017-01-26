/*
Есть объект ladder
  var ladder = {
  step: 0,
  up: function() { // +1
    this.step++;
  },
  down: function() { // -1
    this.step--;
   },
  showStep: function() { // show current result
     console.log(this.step);
  }
};

Сейчас, для последовательного вызова нескольких методов объекта, нужно делать так сделать так:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой:
ladder.up().up().down().up().down().showStep(); // 1

*/

var ladder = {
  step: 0,
  up: function() { // +1
    this.step++;
    return this;
  },
  down: function() { // -1
    this.step--;
    return this;
  },
  showStep: function() { // show current result
     console.log(this.step);
    return this;
  }
};


ladder.up().up().down().up().showStep(); // 1
