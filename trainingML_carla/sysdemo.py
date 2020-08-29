# Command line arguments are provided in the command line
# When we invoke a program like this:
# python program_name
# We can include command line arguments like this:
# python program_name -1 0 1 Hello 3.14 True Difficult 1-player

import sys

# print("This is the name of the script: ", sys.argv[0]) #can give the first thing of the argument 
# print("Number of arguments: ", len(sys.argv)) #how many argment it has
# print("The arguments are: ", str(sys.argv)) #show the variable as a string 

operand_first = int(sys.argv[1])
operand_second = int(sys.argv[2])

print(operand_first + operand_second)