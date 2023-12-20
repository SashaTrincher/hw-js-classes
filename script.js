// 1

class Account {
    constructor (login, email) {
        this.login = login;
        this.email = email;
    };

    getInfo() {
        console.log(`Login: ${this.login} Email: ${this.email}`);
    };
};

const newAccount = new Account('Mangozedog', 'mango@dog.woof');

// newAccount.getInfo();

const newWowAccount = new Account('Poly', 'poly@mail.com');

// newWowAccount.getInfo();

// 2

class User {
    constructor (name, age, followers) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    };

    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
    };
};

const mango = new User('Mango', 2, 20);
   
// mango.getInfo();
   
const poly = new User('Poly', 3, 17);
   
// poly.getInfo();

// 3

class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();
// console.table(items);

storage.addItem('Дроїд');
// console.table(storage.items); 

storage.removeItem('Пролонгер');
// console.table(storage.items);

// 4 

class StringBuilder {
    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    append(str) {
        this._value += str;
    }

    prepend(str) {
        this._value = str + this._value;
    }

    pad(str) {
        this._value = str + this._value + str;
    }
}

const builder = new StringBuilder('.');

builder.append('^');
// console.log(builder.value);

builder.prepend('^');
// console.log(builder.value);

builder.pad('=');
// console.log(builder.value);


// 5 


class Car {
    constructor(maxSpeed, price, speed = 0, isOn = false, distance = 0) {
        this.maxSpeed = maxSpeed;
        this.speed = speed;
        this.isOn = isOn;
        this.distance = distance;
        this.price = price;
    }

    getSpecs() {
        console.log(`Max Speed: ${this.maxSpeed}, Speed: ${this.speed}, Is On: ${this.isOn}, Distance: ${this.distance}, Price: ${this.price}`);
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        this.speed = Math.min(this.speed + value, this.maxSpeed);
    }

    decelerate(value) {
        this.speed = Math.max(this.speed - value, 0);
    }

    drive(hours) {
        if(this.isOn) {
            this.distance += hours * this.speed;
        }
    }
}

const mustang = new Car(200, 2000);

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// mustang.getSpecs();

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// mustang.getSpecs(mustang);

// console.log(mustang.price);
// mustang.price = 4000;
// console.log(mustang.price);
