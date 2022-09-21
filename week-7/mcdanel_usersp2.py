#    Title: mcdanel_usersp2.py
#    Author: Kayla McDanel
#    Date: 09 21 2022
#    Description: Connect Python to MongoDB

# Import the MongoClient
from datetime import datetime
from unittest import result
from pymongo import MongoClient


# Connection string to connect to MongoDB
client = MongoClient ("mongodb+srv://web335_user:s3cret@web335db.n31cdf0.mongodb.net/web335DBretryWrites=true&w=majority")

# Configure a variable to access the web335DB
db = client ['web335DB']

# Create a new user document
mcdanel = {
    "firstName": "Kayla",
    "lastName": "McDanel",
    "employeeId": "1109",
    "email": "kmcdanel@me.com",
    "dateCreated": datetime.utcnow()
}

# Insert document into the collection
mcdanel_user_id = db.users.insert_one(mcdanel).inserted_id
print(mcdanel_user_id)

# Display new user
print(db.users.find_one({"employeeId": "1109"}))

# Update new user email
db.users.update_one(
    {"employeeId": "1109"},
    {
        "$set": {
            "email": "kaylamcdanel@me.com"
        }
    }
)

# Display updated user
print(db.users.find_one({"employeeId":"1109"}))

# Delete new user
result = db.users.delete_one({"employeeId": "1109"})


# Proof it was deleted
print(db.users.find_one({"employeeId":"1109"}))