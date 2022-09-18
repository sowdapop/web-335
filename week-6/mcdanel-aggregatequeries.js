    // Title: mcdanel-aggregatequeries.js
    // Author: Kayla McDanel
    // Date: 09 16 2022
    // Description: Aggregate queries.

// Connection string to connect to MongoDB Shell
//mongosh "mongodb+srv://web335db.n31cdf0.mongodb.net/web335DB" --apiVersion 1 --username web335_user

// Query to show all docs in houses collection
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.houses.find({})


// Query to show all docs in students collection
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.students.find({})


// Query to add a doc to students collection
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.students.insertOne({"firstName": "Pomona", "lastName": "Sprout", "studentId": "s1013", "houseId": "h1008"})


// Query to find what was just added
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.students.findOne({"firstName": "Pomona"})


// Query to delete added doc
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.students.deleteOne({"firstName": "Pomona"})


// Query to make sure it was deleted
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.students.findOne({"firstName": "Pomona"})


// Query to show list of students by house
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.students.aggregate([
{
$lookup:{
"from": "students",
"localField": "houseId",
"foreignField": "studentId",
"as": "students"}}])
  

// Query to show list of students for house Gryffindor
Atlas atlas-pp60gp-shard-0 [primary] web335DB> db.students.aggregate([
  {
    $lookup:{
      "from": "students",
      "localField": "houseId",
      "foreignField": "studentId",
      "as": "students"}},
    {$match:{houseId: "h1007"}}])

// Query to show list of students for Eagle mascot
db.houses.aggregate([
  { $match: { houseId: "h1009" } },
  {
    $lookup: {
      from: "students",
      localField: "houseId",
      foreignField: "houseId",
      as: "Ravenclaw",
    },
  },
]);