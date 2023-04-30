const { Client } = require('pg');

const client = new Client({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port,
    
});

const createTable = async () => {
    try {
        await client.connect();                            // gets connectionpg
        await client.query(
            `CREATE TABLE TASKS  (
                taskid SERIAL PRIMARY KEY ,
                name_task TEXT,
                description TEXT,
                priority_level INT NOT NULL,
                active BOOLEAN NOT NULL
            );`
        ); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();                                // closes connection
    }
};
function create(){
    createTable().then((result) => {
        if (result) {
            console.log('CreateNewTable');
        }
    });
}

module.exports = create;