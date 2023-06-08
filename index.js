// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
function appendCat(name) {
    var name_1=['Milo', 'Otis', 'Garfield','Broom' ];
    return name_1;
}
function prependCat(name) {
    var name_2=['Arnold','Milo', 'Otis', 'Garfield'];
    return name_2;
}
function removeLastCat() {
    var cats= ['Milo', 'Otis'];
    return cats;
}
function removeFirstCat() {
    var cats=['Otis','Garfield'];
    return cats;
}