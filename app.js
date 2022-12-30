let pName = '';
let pAge = '';
let secName = '';
let secAge = '';
let carSpecif = '';
let carSecSpecif = '';

const getName = () => {
    pName = prompt('Введите имя первого человека')
    if (!pName) {
      alert('Это поле не может быть пустым')
      getName()
    }
  }
  getName()
  const getAge = () => {
    pAge = prompt('Введите возраст первого человека')
    if (!pAge) {
      alert('Это поле не может быть пустым')
      getAge()
    }
  }
  getAge()
  const getSecName = () => {
    secName = prompt('Введите имя второго человека')
    if (!secName) {
      alert('Это поле не может быть пустым')
      getSecName()
    }
  }
  getSecName()
  const getSecAge = () => {
    secAge = prompt('Введите имя второго человека')
    if (!secAge) {
      alert('Это поле не может быть пустым')
      getSecAge()
    }
  }
  getSecAge()
  const Specification = () => {
    carSpecif = prompt('Введите характеристики первой машины')
    if (!carSpecif) {
      alert('Это поле не может быть пустым')
      Specification()
    }
  }
  Specification()
  const secSpecification = () => {
    carSecSpecif = prompt('Введите характеристики второй машины')
    if (!carSecSpecif) {
      alert('Это поле не может быть пустым')
      secSpecification()
    }
  }
  secSpecification()

const person1 = new Person(pName, pAge);
const person2 = new Person(secName, secAge);

const car1 = new Car(carSpecif, [person1]); 
const car2 = new Car(carSecSpecif, [person1, person2]);

const garag1 = new Garag (pName, '2 Cars', [person1], [car1,car2]);
const garag2 = new Garag (secName, '1 Cars', [person2], [car2]);

console.log(garag1);
console.log(garag2);
console.log(person1);
console.log(person2);
console.log(car1);
console.log(car2);


