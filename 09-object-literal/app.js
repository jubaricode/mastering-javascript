const person = {
    firstName: 'Steve',
    lastName: 'Job',
    age: 39,
    email: 'steve@job.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Batam',
        zipcode: '29432',
    },
    getBirthYear: function () {
        return 2018 - this.age;
    }
}

let val;

val = person;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.city;
val = person.address.zipcode;
val = person.address['city'];
val = person.getBirthYear();
console.log(val);