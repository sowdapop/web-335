#    Title: mcdanel_calculator.py
#    Author: Kayla McDanel
#    Date: 08 24 2022
#    Description: Calculating with Python

# Functions with returns
def add (x, y):
    return x + y

def subtract (x, y):
    return x - y

def divide (x, y):
    return x / y

def multiply (x, y):
    return x * y

#Variables to test each function
num1 = 4
num2 = 10
num3 = 6
num4 = 8
num5 = 2

#Variable to hold values from above methods
add_total = add(num1, num1)
sub_total = subtract(num2, num3)
div_total = divide(num4, num5)
mul_total = multiply(num2, num5)

#Variable to hold string output
output = "4 + 4 is {0}\n10 - 6 is {1}\n8 / 2 is {2}\n10 * 2 is {3}\n".format(add_total, mul_total, sub_total,div_total)

print(output)