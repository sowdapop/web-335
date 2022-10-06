    // Title: slytherin-whatabook.js
    // Author: Kayla McDanel
    // Date: 10 03 2022
    // Description: Queries for WhatABook project - Wishlist Changes

// Connection string to connect to MongoDB Shell
//mongosh "mongodb+srv://web335db.n31cdf0.mongodb.net/web335DB" --apiVersion 1 --username web335_user

// Query to display a list of books.
db.books.find();

// Display a list of books by genre.
db.books.aggregate([{ $sort: { genre: 1 } }]);

// Display a list of books by author.
db.books.aggregate([{ $sort: { author: 1 } }]);

// Display a book by bookId.
db.books.find({ bookId: "ISBN 10006" });

// Query to display a wishlist by customerId.
db.customers.find({}, {customerId: 1, wishlistitems: 1})

// Query to add a book to a customer’s wishlist.
db.customers.update(
    { customerId: "c1008" },
    {
      $push: {
        wishlistitems: {
          bookId: "ISBN 10006",
          genre: "Sci_Fi",
          title: "Sci_Fi_1",
          author: "Jeccia Shong",
        },
      },
    }
  );
  
  // Remove a  book from a customer’s wishlist.
  db.customers.find({ customerId: "c1008" });
  db.customers.update(
    { customerId: "c1008" },
    {
      $pull: {
        wishlistitems: {
          bookId: "ISBN 10006",
          genre: "Sci_Fi",
          title: "Sci_Fi_1",
          author: "Jeccia Shong",
        },
      },
    }

