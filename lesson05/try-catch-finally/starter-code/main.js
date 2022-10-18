const dogToParse = '{"dog": "Husky", "name": "Dubs}';

const parsedDog = JSON.parse(dogToParse);

console.log(parsedDog.name);
console.log('Program finished');
