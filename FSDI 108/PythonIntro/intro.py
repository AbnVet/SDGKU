# Gary Rapoza

print("Hello from python")

#

name = "Gary"
age = 45
price = 1.342
found = True

print(name)
print(age)
print(price)
print(found)


#conditionals

if(age < 99):
    print("you are young")
    print("Same indentation")
    print("inside if")
elif (age == 99):
    print("You are on the border line")
else:
    print("Sorry, you are old")

print("outside the if")

#functions
def test():
    print("Hello, from a function")
    print ("Im inside too")

def helloGary():
    print("Hello Gary")


#exec call a function
test()
helloGary()

