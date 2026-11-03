const user = {
    name : "Pramod",
    printName(){
        return `Hi, I am ${this.name}`;
    }
}
console.log(user);
console.log(user.printName());