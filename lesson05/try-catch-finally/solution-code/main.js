try {
    const dogToParse = '{"dog": "Husky", "name": "Dubs}';
    const parsedDog = JSON.parse(dogToParse);
    console.log(parsedDog.name);
} catch (error) {
    console.log('invalid dog object');
} finally {
    console.log('Program finished');
}
