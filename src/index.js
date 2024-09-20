import { app } from "./app.js";
import { dbConnection } from "./db/index.js";

const port = process.env.PORT ?? 8000


dbConnection()


app.listen(port , () => {
    console.log("The server on running this" , port);
})