const express = require('express');
const router = express.Router();
const AuthorController = require('./../controller/AuthorController');
const { ObjectId } = require('mongodb');

router.get('/create-author', async function (req, res) {

    const result = {
        status: true,
        message: 'SUCCESS',
        data: []
    }
    try {
        const authors = [
            {
                "author_name": "Pankaj Singh Yadav",
                "author_address": 'Bengaluru',
                "mobile": '8884512509',
                "email": 'pankajdv156@gmail.com',
                "author_dob": new Date("1994/04/12"),
                "noOfAwards": 4,
                "totalBooksPublished": 100,
                "totalBooksSold": 1000,
                "awards": [
                    {
                        "award_name": "ABC",
                        "year": 1988
                    },
                    {
                        "award_name": "ABC",
                        "year": 1985
                    },
                    {
                        "award_name": "ABC",
                        "year": 1989
                    },
                    {
                        "award_name": "ABC",
                        "year": 2000
                    }
                ],
                "sold_books": [
                    {
                        "book_id": 1,
                        "price": 200,
                        "totalSold": 500
                    },
                    {
                        "book_id": 2,
                        "price": 500,
                        "totalSold": 500
                    }
                ]
            },
            {
                "author_name": "Pankaj Singh 1",
                "author_address": "Bengaluru",
                "mobile": "8884512509",
                "email": "pankajdv156@gmail.com",
                "noOfAwards": 2,
                "totalBooksPublished": 150,
                "totalBooksSold": 1000,
                "awards": [
                    {
                        "award_name": "ABC",
                        "year": 1988
                    },
                    {
                        "award_name": "XYZ",
                        "year": 1985
                    }
                ],
                "sold_books": [
                    {
                        "book_id": 1,
                        "price": 200,
                        "totalSold": 200
                    },
                    {
                        "book_id": 2,
                        "price": 500,
                        "totalSold": 500
                    },
                    {
                        "book_id": 3,
                        "price": 700,
                        "totalSold": 300
                    }
                ],
                "author_dob": new Date("1994/12/12")
            },
            {
                "author_name": "Pankaj Singh 3",
                "author_address": "Bengaluru",
                "mobile": "8884512509",
                "email": "pankajdv156@gmail.com",
                "noOfAwards": 4,
                "totalBooksPublished": 1500,
                "totalBooksSold": 200,
                "awards": [
                    {
                        "award_name": "MNO",
                        "year": 1988
                    },
                    {
                        "award_name": "XYZ",
                        "year": 1985
                    },
                    {
                        "award_name": "ZYX",
                        "year": 1989
                    },
                    {
                        "award_name": "ABC",
                        "year": 2000
                    }
                ],
                "sold_books": [
                    {
                        "book_id": 1,
                        "price": 200,
                        "totalSold": 300
                    },
                    {
                        "book_id": 2,
                        "price": 500,
                        "totalSold": 300
                    },
                    {
                        "book_id": 3,
                        "price": 700,
                        "totalSold": 500
                    },
                    {
                        "book_id": 4,
                        "price": 700,
                        "totalSold": 400
                    }
                ],
                "author_dob": new Date("1985/11/5")
            },
            {
                "author_name": "Pankaj Singh 2",
                "author_address": "Bengaluru",
                "mobile": "8884512509",
                "email": "pankajdv115666@gmail.com",
                "noOfAwards": 4,
                "totalBooksPublished": 1500,
                "totalBooksSold": 100,
                "awards": [
                    {
                        "award_name": "ABC",
                        "year": 2002
                    },
                    {
                        "award_name": "ABC",
                        "year": 2001
                    },
                    {
                        "award_name": "ABC",
                        "year": 2003
                    },
                    {
                        "award_name": "ABC",
                        "year": 2000
                    }
                ],
                "sold_books": [
                    {
                        "book_id": 1,
                        "price": 200,
                        "totalSold": 500
                    },
                    {
                        "book_id": 2,
                        "price": 500,
                        "totalSold": 500
                    },
                    {
                        "book_id": 3,
                        "price": 700,
                        "totalSold": 500
                    }
                ],
                author_dob: new Date("1990/11/5")
            },
            {
                "author_name": "Pankaj Singh 4",
                "author_address": "Bengaluru",
                "mobile": "8884512666666",
                "email": "ppankajjdv156@gmail.com",
                "noOfAwards": 5,
                "totalBooksPublished": 150,
                "totalBooksSold": 2000,
                "awards": [
                    {
                        "award_name": "MNO",
                        "year": 1988
                    },
                    {
                        "award_name": "XYZ",
                        "year": 1985
                    },
                    {
                        "award_name": "ZYX",
                        "year": 1989
                    },
                    {
                        "award_name": "ABC",
                        "year": 2000
                    },
                    {
                        "award_name": "PQR",
                        "year": 2004
                    }
                ],
                "sold_books": [
                    {
                        "book_id": 1,
                        "price": 200,
                        "totalSold": 300
                    },
                    {
                        "book_id": 2,
                        "price": 500,
                        "totalSold": 300
                    },
                    {
                        "book_id": 3,
                        "price": 700,
                        "totalSold": 500
                    },
                    {
                        "book_id": 4,
                        "price": 700,
                        "totalSold": 400
                    },
                    {
                        "book_id": 5,
                        "price": 700,
                        "totalSold": 400
                    },
                    {
                        "book_id": 6,
                        "price": 400,
                        "totalSold": 100
                    }
                ],
                "author_dob": new Date("1987/11/5")
            }
        ]
        const data = await AuthorController.Authors.createAuthors(authors)
        if(data){
            result.data= authors
            result.message = 'Authors data inserted successfully.'

        }else{
            result.message = 'Some error ooccured  , Pleaas try later'

        }
        res.send(result)
    } catch (error) {
        console.log(error)
        result.status = false,
            result.message = 'Some error ooccured  , Pleaas try later'
        res.send(result)
    }
})

router.get('/author/awards/:n', async function (req, res) {
    const result = {
        status: true,
        message: 'SUCCESS',
        dataLength: 0,
        data: []
    }
    try {
        var noOfAwards = req.params.n || 0;
        if (noOfAwards) {
            noOfAwards = parseInt(noOfAwards);
            const where = { noOfAwards: { $gte: noOfAwards } }
            const data = await AuthorController.Authors.getAllAuthorsData(where)
            // data.dataLength=  data.length
            result.data = data
            result.message = 'SUCCESS'
            res.send(result)
        }
    } catch (error) {
        console.log(error)
        result.status = false,
            result.message = 'Some error ooccured  , Pleaas try later'
        res.send(result)
    }

})


router.get('/author/year/:year', async function (req, res) {
    const result = {
        status: true,
        message: 'SUCCESS',
        dataLength: 0,
        data: []
    }
    try {
        let year = req.params.year || 0;
        if (year) {
            year = parseInt(year);
            const where = { awards: { $elemMatch: { year: { $gte: year } } } }
            const projection = { author_name: 1, author_address: 1, mobile: 1, email: 1 }
            const data = await AuthorController.Authors.getAllAuthorsData(where, projection)
            // data.dataLength=  data.length
            result.data = data
            result.message = 'SUCCESS'
            res.send(result)
        }
    } catch (error) {
        console.log(error)
        result.status = false,
            result.message = 'Some error ooccured  , Pleaas try later'
        res.send(result)
    }

})

router.get('/author/profit', async function (req, res) {
    const result = {
        status: true,
        message: 'SUCCESS',
        dataLength: 0,
        data: []
    }
    try {
        const getData= req.query
        let author_id = getData.author_id
        let where = {};
        if(author_id){
            if (ObjectId.isValid(author_id)) {
                author_id = ObjectId(author_id)
                where = { _id:author_id };
            }
        }
        let afterWhere = {}
        const data = await AuthorController.Authors.getAllAuthorsAggregateData(where, afterWhere)
        result.data = data
        result.message = 'SUCCESS'
        res.send(result)
    } catch (error) {
        console.log(error)
        result.status = false,
            result.message = 'Some error ooccured  , Pleaas try later'
        res.send(result)
    }

})

router.get('/author/dob/:author_dob/totalPrice/:totalPrice', async function (req, res) {
    const result = {
        status: true,
        message: 'SUCCESS',
        dataLength: 0,
        data: []
    }
    try {
        let author_dob = req.params.author_dob;
        let totalPrice = req.params.totalPrice;
        let where = {};
        let afterWhere = {};
        if (author_dob) {
            where['author_dob'] = { $gte: new Date(author_dob) }
        }
        if (totalPrice) {
            afterWhere['totalProfit'] = { $gte: parseInt(totalPrice) }
        }
        const data = await AuthorController.Authors.getAllAuthorsAggregateData(where, afterWhere)
        result.data = data
        result.message = 'SUCCESS'
        res.send(result)
    } catch (error) {
        console.log(error)
        result.status = false,
            result.message = 'Some error ooccured  , Pleaas try later'
        res.send(result)
    }

})

module.exports = router