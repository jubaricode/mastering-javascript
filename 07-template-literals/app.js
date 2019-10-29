const name = 'Jubari';
const age = 28;
const job = 'Web Developer';
const city = 'Batam';

let html;

// Without Template String (es5)
html = ' <ul><li>Name: ' + name + '</li><li>Age: ' + age +
    '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li> </ul>';

html = '<ul>' +
    '<li>Name : ' + name + '</li>' +
    '<li>Age :' + age + '</li>' +
    '<li>Job : ' + job + '</li>' +
    '<li>City : ' + city + '</li>' +
    '</ul>';

function hello() {
    return 'Hello';
}

// With Template String (es6)
html = `<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City : ${city}</li>
    <li>${5 + 4}</li>
    <li>${hello()}</li>
    <li>${age > 20 ? 'Over 20' : 'Under 20'}</li>

</ul>
`;

document.body.innerHTML = html;
