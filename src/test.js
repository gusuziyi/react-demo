console.log([1,2,3,4].findIndex(x => x == 4))

console.log('abc'.padStart(10)) 

const alertMe = (msg) => {
    console.log(msg)
}
class Robot {
    constructor (msg) {
        this.message = msg
    }
    say () {
        alertMe(this.message)
    }
}
const marvin = new Robot('hello 1')
marvin.say()