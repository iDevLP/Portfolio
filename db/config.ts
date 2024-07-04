import { column, defineDb, defineTable } from 'astro:db';

const Users = defineTable({
  columns: {
    user: column.text(),
    password: column.text()
  }
})
// https://astro.build/db/config
export default defineDb({
  tables: { Users }
});
