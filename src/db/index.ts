import Knex from "knex";
import { knexfile } from "./knexfile";

let knex: Knex;
if (process.env.NODE_ENV == "development") {
  knex = Knex(knexfile.development);
}

if (process.env.NODE_ENV == "production") {
  knex = Knex(knexfile.production);
}

export { knex };
