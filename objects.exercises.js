// 1. Creeaza un obiect, care sa descrie o masina, avand urmatoarele proprietati: marca, model, an, pret, numar km.

let carobj = {
    brand: 'Volkswagen',
    model: 'ID.4',
    year: 2021,
    price: '45.000 euro',
    numberOfKilometers: 480
}

// 1.1. Modifica numarul de km, dandu-le, bineinteles, o valoare mai mica
carobj.numberOfKilometers = 400;
console.log(carobj);

// 1.2 Aduaga o proprietate noua, description, cu valoarea aferenta. E sansa ta sa fii creativ.
carobj.description = 'The volkswagen car is an electrical car';
console.log(carobj);

// 1.3 Sterge descrierea din obiect.
 delete carobj.description;
 console.log(carobj);

 // 2. Fa o functie, numita tuneCar, care primeste ca parametru un obiect, reprezentand o masina. Functia returneaza un obiect nou, fara a il modifica pe cel primit ca parametru. Obiectul returnat de functie are de doua ori mai putini km, iar pretul este cu 50% mai mare. La apelul functiei, paseaza ca valoare pentru parametru obiectul creat mai sus.


//  audiObj2 = audiObj;
 function tuneCar(audiObj) {
        console.log(audiObj.price + (50 / 100 * audiObj.price));
        console.log(audiObj.brand);
        console.log(audiObj.model);
        console.log(audiObj.year);
        console.log(audiObj.numberOfKilometers / 3);
 }

 let audiObj2 = {
    brand: 'Audi',
    model:'Q4',
    numberOfKilometers: 1000,
    year:2022,
    price: 50000
 }

tuneCar(audiObj2);

// 3. Folosind metodele existente pe obiectul Date, afiseaza consola ora curenta, sub urmatorul format: HH:MM:SS (ex: 21:07:34).
let currentHour = new Date();
let hours = currentHour.getHours();
let minutes = currentHour.getMinutes();
let seconds = currentHour.getSeconds();
let currentHours = [hours, minutes, seconds];

// Daca ora, minutele sau secundele sunt formate dintr-o singura cifra, am adaugat un 0 in fata.
for (i = 0; i < currentHours.length; i++) {
    if (currentHours[i] < 10) {
        currentHours[i] = '0' + currentHours[i];
    }   
}

console.log(currentHours[0] + ':' + currentHours[1] + ':' + currentHours[2]);

console.log('Reference objects')

const personObj1 = {
    name: 'Christa',
    age: 20
  };
  
  let person = personObj1;
  person.age = 25;

  console.log (personObj1);
  console.log (person);

  // Ce valori au 
// personObj1 = { name: 'Christa', age:25 } 
// person = { name: 'Christa', age:25 }

person = {
    name: 'John',
    age: 50
  };
  
  const personObj2 = person;
  
  console.log (personObj1);
  console.log (personObj2);
  // Ce valori au 
  // personObj1 = { name: 'Christa', age: 25} Aici valorile raman neschimbate, deoarece noile valori ale obiectului person nu afecteaza referinta obiectului personObj1
  // personObj2 = { name: 'John', age: 50 }

  

 
