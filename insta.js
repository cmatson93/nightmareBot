const Nightmare = require('nightmare');
const nightmare = Nightmare({
    show: true,
    webPreferences: {
        partition: 'nopersist',
    },
});

const username = 'wisnugro';
const password = '12345678';
const search = '#jogja';
const comment = 'keren';
const posts = 10;

nightmare
    .goto('http://twitter.com')
    .wait(2000)
    .end()
    // .wait('._g9ean')
    // .click('._g9ean') // log in option
    // .wait('input[name=username]')
    // .insert('input[name=username]', username)
    // .insert('input[name=password]', password)
    // .click('button') // btn login
    // .wait('input[placeholder=Search]')
    // .insert('input[placeholder=Search]', search)
    // .wait('._gimca')
    // .click('._gimca') // top suggest
    // .wait('._mck9w')
    // .click('._mck9w a') // click post
    // .wait('._eszkz');

// for (let i = 0; i < posts; i++) {
//     nightmare.wait(1000)
//         .click('._eszkz') // like
//         .insert('._bilrf', comment) // comment
//         .type('._bilrf', '\u000d')
//         .click('._3a693'); // next
// }

// nightmare
//     .wait(2000)
//     .end()
//     .then(function() {
//         console.log('success');
//     })
//     .catch(function(err) {
//         console.log(err);
//     });