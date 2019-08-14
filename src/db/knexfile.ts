import "dotenv/config";
const {
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PW,
  POSTGRES_PORT,
} = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
      database: "allen",
      user: POSTGRES_USER,
    },
    pool: {
      min: 2,
      max: 4,
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
    // debug: true,
  },

  production: {
    client: "pg",
    connection: {
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
      database: "allen",
      user: POSTGRES_USER,
      password: POSTGRES_PW,
    },
    pool: {
      min: 2,
      max: 4,
    },
  },
};
