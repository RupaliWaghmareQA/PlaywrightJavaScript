





/*function multiply(x, y) {
    return x * y;
}*/
const multiply=(x, y) => x * y;
const isPositive =num=> num>0;

const getSelectors=ids =>ids.map(id => 
    "#" +id);
/*function isPositive(num) {
    return num > 0;
}*/

console.log(multiply(4, 5));
console.log(isPositive(-3));
console.log(getSelectors(["email", "password", "login"]));


/*function getSelectors(ids) {
    return ids.map(function(id) {
        return "#" + id;
    });
}*/