    // Title: mcdanel-projections.js
    // Author: Kayla McDanel
    // Date: 09 07 2022
    // Description: Adding new and updating current users.

//Add new user named Wesley Brown
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.users.insertOne({"firstName":"Wesley", "lastName": "Brown", "employeeId": "345", "email": "wbrown@me.com", "dateCreated": "ISODate"})
{
  acknowledged: true,
  insertedId: ObjectId("63193399e940cdff09a626c0")
}

//Update Mozart's email to mozart@me.com
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.users.update({'email':'wmozart@me.com'},{$set:{'email':'mozart@me.com'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//Confirm updated email
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.users.findOne({"firstName":"Wolfgang"})
{
  _id: ObjectId("6311465d119e832701c6172e"),
  firstName: 'Wolfgang',
  lastName: 'Mozart',
  employeeId: '1009',
  email: 'mozart@me.com',
  dateCreated: ISODate("2022-09-01T23:55:09.194Z")
}

//Query to list all docs in users collection.
//Projections used to specify fields to display
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.users.find({}, {"firstName":1, "lastName":1, "email":1, "_id":0 })
[
  { firstName: 'Johann', lastName: 'Bach', email: 'jbach@me.com' },
  {
    firstName: 'Ludwig',
    lastName: 'Beethoven',
    email: 'lbeethoven@me.com'
  },
  { firstName: 'Wolfgang', lastName: 'Mozart', email: 'mozart@me.com' },
  {
    firstName: 'Johannes',
    lastName: 'Brahms',
    email: 'jbrahms@me.com'
  },
  { firstName: 'Richard', lastName: 'Wagner', email: 'rwagner@me.com' },
  {
    firstName: 'Claude',
    lastName: 'Debussy',
    email: 'cdebussy@me.com'
  },
  { firstName: 'Wesley', lastName: 'Brown', email: 'wbrown@me.com' }
]