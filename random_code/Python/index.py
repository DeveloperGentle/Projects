# # def check_for_007(list):
    
# #     string = '' 
# #     for i in list:
# #         if i == 0 or i == 7:
# #             string+=str(i) 
             
    
# #     print(string.find('007') != -1)

# # check_for_007([1,7,2,0,4,5,0])
# # check_for_007([1,0,2,4,0,5,7])

# def summer_69(array):
#     sum = 0
     
#     if array.count(6) != 0:
       
#         sliced_array_1 = array[array.index(array[0]):array.index(6)]
#         sliced_array_2 =  array[array.index(9)+1:array.index(len(array) - 1)]
#         filtered_array = sliced_array_1 + sliced_array_2

#         for i in filtered_array:
#             sum+=i  

#     else:
#         for i in array:
#             sum+=i  

#     return sum        

      
# print(summer_69([1,3,5]))
# print(summer_69([4,5,6,7,8,9]))
# print(summer_69([8,2,6,8,2,3,9]))

#sum of the squares of  user inputed numbers
# def sumSquares():
#  n1 = int(input("Enter first number: "))
#  n2 = int(input("Enter second number: "))

#  return (n1 * n1) + (n2 * n2)

# print(sumSquares()) 

#running sum
# def runningSum():
#  sum = 0
#  n1 = 0

#  while(n1 >= 0):
#   sum += n1
#   n1 = int(input("Enter number: "))

#  return sum
  
# print(runningSum())        
