    // Title: mcdanel-mongodbshell.js
    // Author: Kayla McDanel
    // Date: 09 01 2022
    // Description: Building queries.

// Connection string to connect to MongoDB Shell
//mongosh "mongodb+srv://web335db.n31cdf0.mongodb.net/web335DB" --apiVersion 1 --username web335_user


//Load user.js script
Atlas atlas-pp60gp-shard-0 [primary] web335DB> load("users.js")
[
    {
    _id: ObjectId("6311465d119e832701c6172f"),
    firstName: 'Johannes',
    lastName: 'Brahms',
    employeeId: '1010',
    email: 'jbrahms@me.com',
    dateCreated: ISODate("2022-09-01T23:55:09.194Z")
  },
  {
    _id: ObjectId("6311465d119e832701c61730"),
    firstName: 'Richard',
    lastName: 'Wagner',
    employeeId: '1011',
    email: 'rwagner@me.com',
    dateCreated: ISODate("2022-09-01T23:55:09.194Z")
  },
  {
    _id: ObjectId("6311465d119e832701c61731"),
    firstName: 'Claude',
    lastName: 'Debussy',
    employeeId: '1012',
    email: 'cdebussy@me.com',
    dateCreated: ISODate("2022-09-01T23:55:09.194Z")
  }
]

////Query to display all documents in users collection
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.users.find()
[
  {
    _id: ObjectId("6311465d119e832701c6172c"),
    firstName: 'Johann',
    lastName: 'Bach',
    employeeId: '1007',
    email: 'jbach@me.com',
    dateCreated: ISODate("2022-09-01T23:55:09.194Z")
  },
  {
    _id: ObjectId("6311465d119e832701c6172d"),
    firstName: 'Ludwig',
    lastName: 'Beethoven',
    employeeId: '1008',
    email: 'lbeethoven@me.com',
    dateCreated: ISODate("2022-09-01T23:55:09.194Z")
  },
  {
    _id: ObjectId("6311465d119e832701c6172e"),
    firstName: 'Wolfgang',
    lastName: 'Mozart',
    employeeId: '1009',
    email: 'wmozart@me.com',
    dateCreated: ISODate("2022-09-01T23:55:09.194Z")
  },
  {
    _id: ObjectId("6311465d119e832701c6172f"),
    firstName: 'Johannes',
    lastName: 'Brahms',
    employeeId: '1010',
    email: 'jbrahms@me.com',
    dateCreated: ISODate("2022-09-01T23:55:09.194Z")
  },
  {
    _id: ObjectId("6311465d119e832701c61730"),
    firstName: 'Richard',
    lastName: 'Wagner',
    employeeId: '1011',
    email: 'rwagner@me.com',
    dateCreated: ISODate("2022-09-01T23:55:09.194Z")
  },
  {
    _id: ObjectId("6311465d119e832701c61731"),
    firstName: 'Claude',
    lastName: 'Debussy',
    employeeId: '1012',
    email: 'cdebussy@me.com',
    dateCreated: ISODate("2022-09-01T23:55:09.194Z")
  }
]

//Query to find the user with email of jbach@me.com
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.users.findOne({"email": "jbach@me.com"})
{
  _id: ObjectId("6311465d119e832701c6172c"),
  firstName: 'Johann',
  lastName: 'Bach',
  employeeId: '1007',
  email: 'jbach@me.com',
  dateCreated: ISODate("2022-09-01T23:55:09.194Z")
}


//Query to find the user with last name Mozart
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.users.findOne({"lastName": "Mozart"})
{
  _id: ObjectId("6311465d119e832701c6172e"),
  firstName: 'Wolfgang',
  lastName: 'Mozart',
  employeeId: '1009',
  email: 'wmozart@me.com',
  dateCreated: ISODate("2022-09-01T23:55:09.194Z")
}

//Query to find the user with first name Richard
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.users.findOne({"firstName": "Richard"})
{
  _id: ObjectId("6311465d119e832701c61730"),
  firstName: 'Richard',
  lastName: 'Wagner',
  employeeId: '1011',
  email: 'rwagner@me.com',
  dateCreated: ISODate("2022-09-01T23:55:09.194Z")
}

//Query to find the user with employee ID 1010
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.users.findOne({"employeeId": "1010"})
{
  _id: ObjectId("6311465d119e832701c6172f"),
  firstName: 'Johannes',
  lastName: 'Brahms',
  employeeId: '1010',
  email: 'jbrahms@me.com',
  dateCreated: ISODate("2022-09-01T23:55:09.194Z")
}
