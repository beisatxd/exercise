// let movie_title: string = "Titanic 2 2022"
// let age: number = 22
// let bool: boolean = true
//
// console.log(movie_title, age, bool)
//
// let array: number[] = [10, 20, 30]
//
// type UserId = number;
// type UserFirstName = string;
// type UserLastName = string;
// type UserAge = number;
// type UserIsActive = boolean;
//
// type User = {
//     id: UserId,
//     first_name: UserFirstName,
//     last_name: UserLastName,
//     age: UserAge,
//     is_active: UserIsActive
// }
//
// let user: User = {
//     id: 1,
//     first_name: "Beysat",
//     last_name: "Sebaydin",
//     age: 22,
//     is_active: true
// };

enum CAR_TYPE{
    SEDAN = "sedan",
    COMBI = "combi",
    HATCHBACK = "hatchback"
}
class Car {
    protected type: CAR_TYPE;
    constructor() {
        this.type = CAR_TYPE.SEDAN;
    }
    setType(type: CAR_TYPE){
        this.type = type
    }
    getType() {
        return this.type;
    }
}

enum FERRARI_COLOR {
    YELLOW = "yellow",
    BLACK = "black",
    RED = "red"
}
class Ferrari extends Car{
    private color: FERRARI_COLOR;

    constructor() {
        super();
        this.color = FERRARI_COLOR.BLACK;
    }

    setColor(color: FERRARI_COLOR){
        this.color = color;
    }
    getColor() {
        return this.color;
    }

}

const ferrari = new Ferrari();
ferrari.setType(CAR_TYPE.SEDAN);
ferrari.setColor(FERRARI_COLOR.RED)
console.log(ferrari.getType())
console.log(ferrari.getColor())

