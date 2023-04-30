const { Client } = require('pg');
let database = process.env.database
const client = new Client({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    port: process.env.port,
});

const createDatabase = async () => {
    try {
        await client.connect();                            // gets connectionpg
        await client.query(`CREATE DATABASE ${database}`); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();                                // closes connection
    }
};
async function create(){
    createDatabase().then((result) => {
        if (result) {
            console.log('Database created');
        }
    });
}

module.exports = create;
