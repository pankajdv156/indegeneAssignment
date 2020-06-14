const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'indegene';
class Authors {

    static async connectToMongo() {
        const client = await MongoClient.connect(dbUrl, { useNewUrlParser: true })
            .catch(err => { console.log(err); });
        const db = client.db(dbName);
        return db

    }

   static async createAuthors(authors) {

        try {

            const db = await this.connectToMongo()
            const Authors = db.collection('authors')
            const results = Authors.insertMany(authors)
            return results
        } catch (error) {
            console.log(error)
            return 0

        }
    }

    static async getAllAuthorsData(where, select) {
        where = where || {}
        select = select || {}
        try {

            const db = await this.connectToMongo()
            const Authors = db.collection('authors')
            const results = Authors.find(where, select).toArray()
            return results
        } catch (error) {
            console.log(error)
            return 0

        }
    }

    static async getAllAuthorsAggregateData(where, afterWhere) {
        where = where || {}
        afterWhere = afterWhere || {}
        try {

            where = where || {}
            const db = await this.connectToMongo()
            const Authors = db.collection('authors')
            const results = Authors.aggregate([
                { $match: where },
                { $unwind: "$sold_books" },
                {
                    $group: {
                        _id: "$_id",
                        "totalBooksSold": { $sum: "$sold_books.price" },
                        "totalProfit": { $sum: { $multiply: [{ $convert: { input: "$sold_books.price", to: "int" }}, {$convert: { input: "$sold_books.totalSold", to: "int" }}] } }
                    }
                },
                { $match: afterWhere }
            ]).toArray()
            return results
        } catch (error) {
            console.log(error)
            return 0

        }
    }

}


module.exports = { Authors }