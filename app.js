const app = require('express')();

const mongodb = require('mongodb');
const {MongoClient} = mongodb;

//Connection string  port 27017
const connectionString = 'mongodb://localhost:27017/newdb'; 

//create a function to connect to a database.
async function connectToDb(str) {
    const client = new MongoClient(str,
        {
        useUnifiedTopology: true,
        useNewUrlParser: true
        }
        );

        try{
                await client.connect();
                return client.db();
           } catch (error) {
               console.log(err);
           }
}
connectToDb(connectionString)
.then(db =>{
    console.log('database connected');

    db.
        collection('friends')
        .insertOne(
        {
            "name": "Femi",
             age: 120,
             networth: "700BTC"
        }
    )
    .then(doc => {
        console.log({doc});
    })
    .catch(err => {
        console.log(err);
    })
})
.catch(err => {
    console.log(err);
})


app.listen(5000, ()=>{
    console.log("server started on port 5000");
});