import mysql from "mysql";
import util from "util";


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'melanet123',
    database: 'cusman'
});

// promise wrapper to enable async await with MYSQL
connection.query = util.promisify(connection.query).bind(connection);

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

export default connection;
