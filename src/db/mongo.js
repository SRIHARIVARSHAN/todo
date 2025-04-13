const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "EHB7U4gXVuCDTJXo"
const DATABASE_NAME = 'sample_mflix';
const CONNECTION_URI = `mongodb+srv://todo.hpiayqf.mongodb.net/?retryWrites=true&w=majority&appName=todo`
async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'skumar',
        pass: PASSWORD
    });
}


main().then(() => {
    console.log('Connected');
   
}).catch(console.log);