/**@type { import("drizzle-kit").Config} */
export default{
    schema:"./utils/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_GRoHuzDrQb19@ep-withered-bar-a8ibknw5-pooler.eastus2.azure.neon.tech/ai-interview?sslmode=require'
    }
}
