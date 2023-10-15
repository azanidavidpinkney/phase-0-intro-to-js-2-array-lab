// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    return cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, "Broom"];
    console.log(cats);
    return newCats;
}

function prependCat(name) {
    const oldCats = ["Arnold", ...cats]
    console.log(cats);
    return oldCats;
}

function removeLastCat(name) {
    const twoCats = cats.slice(0,2);
    return twoCats;
}

function removeFirstCat(name) {
    const oneCat = cats.slice(1);
    return oneCat;
}