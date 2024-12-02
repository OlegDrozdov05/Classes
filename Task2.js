

//1
class Person {
    #name

    get name() {
        return this.#name
    }

    set name(name) {
        this.#name = name;
    }
}

class Student {
    #grade

    get grade() {
        return this.#grade
    }

    set grade(newGrade) {
        if(newGrade >= 1 && newGrade <= 5) this.#grade = newGrade
    }
}

const person = new Person()
person.name = "Имя"
console.log(person.name)

const student = new Student()
student.name = "Студент"
console.log(student.name)
student.grade = 4
student.grade = -3
console.log(student.grade)

//2


class Shape {
    #name
    static count = 0;
    constructor() {
        this.#name = this.toString()
    }

    get name() {
        return this.#name
    }

    set name(value) {
        this.#name = value;
    }

    getArea() {
        throw new Error("Инициализация абстрактного класса!")
    }

    static getCount() {
        return Shape.count
    }

}

class Rectangle extends Shape {
    constructor(width,height) {
        super()
        this.width = width;
        this.height = height;
        this.name = "Прямоугольник"
        Shape.count++
    }

    getArea() {
        return this.width * this.height
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
        this.name = "Окружность"
        Shape.count++
    }

    getArea() {
        return Math.PI * this.radius * this.radius
    }
}

const rect = new Rectangle(2,5)
const circle = new Circle(5);
console.log(rect.name)
console.log(circle.name)
console.log(rect.getArea())
console.log(circle.getArea())
console.log(Shape.getCount())
