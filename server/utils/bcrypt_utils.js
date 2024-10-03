const bcrypt = require('bcrypt');

const hash_password = (password) => {
    try {
        return bcrypt.hash(password, 10);
    } catch (error) {
        console.log(`Something went wrong while hashing the password. ERR:${error}`);
    }
}

const compare_password = (password, hashed_password) => {
    try {
        return bcrypt.compare(password, hashed_password);
    } catch (error) {
        console.log(`Something went wrong while comparing the passwords. ERR:${error}`);
    }
}

module.exports = { hash_password, compare_password }