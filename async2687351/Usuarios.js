const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users';

// Ejecutar asincrónica con promesas
axios.get(url)
    .then((response) => {
        const users = response.data;
        users.forEach(user => {
            console.log(user.name);
            console.log('--------------');
        });
    })
    .catch((error) => {
        console.log(error.code);
    });
