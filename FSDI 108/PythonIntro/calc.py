print ("Gary's Test Message -------")

def print_menu():
    print("-----------------------------")
    print("      Simple Pycalc          ")
    print("-----------------------------")

    print("[1] Sum")
    print("[2] Subtract")
    print("[3] Multiply")
    print("[4] Divide")
    print("[x] Close")




 #plain instructions
opt = ""
while (opt != "x"):
    error = False

    print_menu()
    print("-----------------------------")
    opt = input("Choose an option: ")
    if (opt == "x"):
        break

    try:
        num1 = float(input("Please type in first Number: "))
        num2 = float(input("Please type in second Number: "))
    except:
        print("Invalid input, try again")
        continue

    if(opt == "1"):
        print(f"The result is {num1 + num2}")
    elif(opt == "2"):
        print(f"The result is {num1 - num2}")
    elif(opt == "3"):
        print(f"The result is {num1 * num2}")
    elif(opt == "4"):
        if (num2 == 0):
            print("Error!")
        else:
            print(f"The result is {num1 / num2}")

    input("Press enter to continue")

print("Goodbye")
