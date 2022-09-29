#    Title: whatabook.py
#    Author: Kayla McDanel & April Yang
#    Date: 09 29 2022
#    Description: Connect Python to MongoDB for WhatABook Console

# Import the MongoClient
from datetime import datetime
from unittest import result
from pymongo import MongoClient


# Connection string to connect to MongoDB
client = MongoClient ("mongodb+srv://web335_user:s3cret@web335db.n31cdf0.mongodb.net/web335DBretryWrites=true&w=majority")

# Configure a variable to access the web335DB
db = client ['web335DB']

# Display list of books (make easy to read)


# Supply list of genre choice, display results based on selection

# Prompt user to enter a customerId, display wishlist by customerId.

# Basic error handling for an invalid customerId (if/else or switch statement)