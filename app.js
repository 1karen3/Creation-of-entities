while(!(pName = prompt('Введите имя первого человека'))) 
    alert('Это поле не может быть пустым');
while(!(pAge = prompt('Введите возраст первого человека'))) 
    alert('Это поле не может быть пустым');
while(!(secName = prompt('Введите имя второго человека'))) 
    alert('Это поле не может быть пустым');
while(!(secAge = prompt('Введите возраст второго человека'))) 
    alert('Это поле не может быть пустым');
while(!(carSpecif = prompt('Введите характеристики первой машины'))) 
    alert('Это поле не может быть пустым');    
while(!(carSecSpecif  = prompt('Введите характеристики второй машины'))) 
    alert('Это поле не может быть пустым');  

const person1 = new Person(pName, pAge);
const person2 = new Person(secName, secAge);

const car1 = new Car(carSpecif, [person1]); 
const car2 = new Car(carSecSpecif, [person1, person2]);

const garag1 = new Garag (pName, '2 Cars', [person1], [car1,car2]);
const garag2 = new Garag (secName, '1 Cars', [person2], [car2]);

console.log(garag1,person1,car1,car2);
