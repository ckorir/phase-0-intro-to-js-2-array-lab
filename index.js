// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Define the function to destructively append a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name){
    const newCats = cats.slice();
    newCats.splice(newCats.length, 0, name);

    return newCats;
}

function prependCat(name) {
    const newCats = cats.slice();
    newCats.splice(0, 0, name);

    return newCats;
}

function removeLastCat() {
    const newCats = cats.slice();
    newCats.splice(newCats.length - 1);

    return newCats;
}

function removeFirstCat() {
    const newCats = cats.slice();
    newCats.splice(0, 1);

    return newCats;
}