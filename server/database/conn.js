const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');




const connect = async () =>  {
    const mongod = await MongoMemoryServer.create();

    const getUri = mongod.getUri();
    mongoose.set('strictQuery',true)
    const db = await mongoose.connect(getUri);
    console.log('Database Connected');
    return db;
}

module.exports = connect;