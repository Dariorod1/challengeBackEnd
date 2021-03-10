import app from './app';
import sequelize from '../src/database/database';
async function main() {


    await app.listen(4000)
    console.log("Server on port 4000")
}


main()