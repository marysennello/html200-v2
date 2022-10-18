let trees = ['redwood', 'spruce', 'oak', 'madrone', 'elm'];
console.log(trees);

trees.push('larch');
console.log(trees);

trees.splice(2,1);
console.log(trees);

let stringTrees = trees.join(',');
console.log(stringTrees);
