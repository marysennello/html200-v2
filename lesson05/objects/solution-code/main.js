const dog = {
    name: 'Fido',
    age: 4,
    speak: function() {
        console.log(this.name);
    },
    owner: {
        firstName: 'Mary',
        lastName: 'Smith'
    }
};

dog.speak();