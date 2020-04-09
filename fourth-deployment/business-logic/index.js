const MongoClient = require('mongodb').MongoClient;

const get = async (url) => {
    const client = await MongoClient.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});
    if(!client){
        return "client not found";
    }
    let status;
    try{
        const db = client.db("blog-db");
        let collection = db.collection('blog');
        const data = await collection.find({}).toArray();
        status = data;
    }catch(err){
        status = err;
    }finally{
        client.close();
        return status;
    }
}

const create = async (heading,body,url) => {
    const client = await MongoClient.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});
    if(!client){
        return "client not found";
    }
    let status;
    try{
        const db = client.db("blog-db");
        let collection = db.collection('blog');
        let query = {Header : heading, Body : body};
        const data = await collection.insertOne(query);
        status = data;
    }catch(err){
        status = err;
    }finally{
        client.close();
        return status;
    }
}

module.exports = {
    get,
    create
}