function Person(){
    this.name = "Shailesh";
    this.age = 25;
} 

var person1 = Person();
var person2 = new Person();

console.log(person1);
console.log(person2);

function duplicate(arr) {
    return [...arr, ...arr];
}

console.log(duplicate([1,2,3,4,5]))