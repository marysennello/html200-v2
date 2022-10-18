const myDogBreed = 'labradoodle';

// Note that if you're using a "return" keyword in a case,
// the break is actually not necessary. The "return" keyword
// gives control back to the caller of the function
function getSheddingAmount(breed) {
    switch (breed) {
        case 'beagle':
        case 'golden retriever': {
            return 'lots of shedding';
            break;
        }
        case 'portuguese water dog': {
            return 'no shedding';
            break;
        }
        default: {
            return 'not found';
        }
    }
}

console.log(
    getSheddingAmount(myDogBreed)
);
