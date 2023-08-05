console.log(`Here in init-mongo`, process.env)
db.auth(process.env.MONGO_INITDB_ROOT_USERNAME, process.env.MONGO_INITDB_ROOT_PASSWORD);
// db = db.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/admin`);
// db = db.getSiblingDB(process.env.MONGO_DB_NAME); // we can not use "use" statement here to switch db

console.log(`Create DB`);
console.log(db.createUser(
    {
        user: process.env.MONGO_USER,
        pwd: process.env.MONGO_PASSWORD,
        roles: [ { role: "readWrite", db: process.env.MONGO_DB_NAME} ],
    }
));
console.log('Users:');
console.log(db.getUsers());