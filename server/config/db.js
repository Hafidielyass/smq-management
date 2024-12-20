const mysql = require("mysql2");
const { DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

const connectDB = async () => {
  try {
    const db = mysql.createConnection({
      host: DB_HOST,
      user: DB_USERNAME, // your MySQL username
      password: DB_PASSWORD, // your MySQL password
      database: DB_DATABASE, // your MySQL database name
    });

    console.log(`Mysql is  connected successfully on ${db.config.host} `);
  } catch (error) {
    console.error((err) => console.error(`Error ${error.message}`));
    process.exit(1);
  }
};

module.exports = { connectDB };
