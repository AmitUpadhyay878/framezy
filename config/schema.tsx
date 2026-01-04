import { id } from "date-fns/locale";
import { date, integer, json, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().default(5).notNull(),
});

export const projectTable = pgTable("project",{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId: varchar().notNull(),
  userInput: varchar(),
  device: varchar().notNull(),
  createdOn:date().defaultNow(),
  config: json(),
  userId: varchar().references(()=>usersTable.email).notNull(),
  //description: varchar({ length: 1000 }).notNull(),
  //createdAt: integer().notNull(),
})