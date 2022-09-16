#    Title: mcdanel_usersp1.py
#    Author: Kayla McDanel
#    Date: 09 15 2022
#    Description: Connect Python to MongoDB

# Import the MongoClient
from pymongo import MongoClient


# Connection string to connect to MongoDB
client = MongoClient ("mongodb+srv://web335_user:s3cret@web335db.n31cdf0.mongodb.net/web335DBretryWrites=true&w=majority")

# Configure a variable to access the web335DB
db = client ['web335DB']

for user in db.users.find({}, {"firstName": 1, "lastName":1 }):
    print(user)

print(db.users.find_one({"employeeId":"1011"}))

print(db.users.find_one({"lastName":"Mozart"}))