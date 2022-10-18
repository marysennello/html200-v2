const isDogHungry = true;

if (isDogHungry) {
    console.log('The dog is hungry');
} else {
    console.log('You can feed the dog later');
}






const hairLengthInInches = 10;

if (hairLengthInInches < 2) {
    console.log('short hair');
} else if (hairLengthInInches >= 2 && hairLengthInInches < 5) {
    console.log('medium hair');
} else {
    console.log('long hair');
}





function makeDogRollOver(dog) {
    if (!dog) {
        console.log('You need to bring your dog first');
    } else {
        console.log('Trainer: Hello, you asked ' + dog + ' to roll over');
        console.log('Trainer: Hey ' + dog + ', roll over!');
        console.log(dog + ': Woof! (rolls over)');
        console.log('Trainer: Good dog!');
    }
}

makeDogRollOver('Fido');





const dogAgeInHumanYears = 1;
let puppy;

if (dogAgeInHumanYears <= 2) {
    puppy = true;
} else {
    puppy = false;
}

console.log(puppy);