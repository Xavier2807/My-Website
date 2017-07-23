let pen = 1;
let apple = 2;

let ali = 'ali';
let ahmad = 'ahmad';

//let result = pen + apple;

function add(num1, num2) {
    return num1 * num2;
}

console.log(add(pen, apple));
console.log(add(ali, ahmad))



/*function createNewHuman(name, age) {
    let human = {
        name: name,
        age: age,

        // function inside object
        talk: function () {
            return 'hello my name is ' + name + 'age is ' + age;
        }
    };

    return human;
}

console.log(createNewHuman('abc','15').talk());*/

function Login() {
    let username = document
        .getElementById('usr')
        .value;

    let password = document
        .getElementById('pwd')
        .value;

    let validLoginList = [
        { usr: 'jane', pwd: '1234' },
        { usr: 'john', pwd: 'abc' }
    ]

    validLoginList.forEach(function (user) {
        if (username == user.usr && password == user.pwd) {
            isUserFond = true;
        }
    }
    )

    isUserFond == true ? alert("Successful Login") : alert("Fail Login");
}