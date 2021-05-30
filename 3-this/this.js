function hello() {
  console.log('----- function -----');
  console.log(this);
  console.log(this === global);
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log('----- class -----');
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(1);
a.memberFunction();

console.log('----- 전역 범위 -----');
console.log(this);
console.log(this === module.exports);
