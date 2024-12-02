//1
class Book {
    constructor(name,author) {
        this.name = name
        this.author = author
    }

    getBookInfo() {
        return `${this.name}, ${this.author}`
    }
}

const book = new Book("Название книги", "автор")
console.log(book.getBookInfo())


//2

class Person {
    #name = 'Имя'
    #age = "18"

    get name(){
        return this.#name;
    }

    get age(){
        return this.#age;
    }
}
const person = new Person();
console.log(person.name)
console.log(person.age)

//3

class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        return `${this.name} ест`
    }
    walk() {
        return `${this.name} ходит`
    }
    act() {
        return `${this.name} что-то делает`
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    act() {
        return `${this.name} лает!`
    }
}

const animal = new Animal("животное")
console.log(animal.act())
const dog = new Dog("собака")
console.log(dog.eat())
console.log(dog.act())
