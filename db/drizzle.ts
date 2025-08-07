import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { schema } from "./schema";

const sql = neon(process.env.DATABASE_URL!);
const Schema = schema;
export const db = drizzle({ client: sql, schema: Schema });
