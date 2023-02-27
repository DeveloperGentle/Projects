#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <string.h>

//basic calculator function
// double calculate(double fNum,double sNum,char operator) {

// if(operator == '-') {
//  return (fNum > sNum) ? (fNum-sNum) : (sNum > fNum) ? (sNum-fNum) : 0;
// }

// else if(operator == '+') {
//  return (fNum+sNum);
// }

// else if(operator == '*') {
//  return (fNum*sNum);
// }

// else if(operator == '/') {
//  return (fNum > sNum) ? (fNum/sNum) : (sNum > fNum) ? (sNum/fNum) : 1;
// }


// else {
//  printf("Invalid operator");
// }
// }


//getting user input
// int main() {
// double fNum;
// double sNum;
// char operator;

// printf("Enter first number: ");
// scanf("%lf",&fNum);
// printf("Enter second number: ");
// scanf("%lf",&sNum);
// printf("Enter operator: ");
// scanf(" %c",&operator);

// printf("Answer: %f",calculate(fNum,sNum,operator));

// return 0;

// }


//switch statements
// int main() {
//  char grade = 'U';

//  switch(grade) {
//   case 'A':
//   printf("You did well");
//   break;
//   case 'B':
//   printf("You did nice");
//   break;
//   case 'C':
//   printf("Not bad");
//   break;
//   case 'D':
//   printf("I'm Disappointed");
//   break;
//   case 'E':
//   printf("You did poorly, why?");
//   break;
//   case 'F':
//   printf("So you actually failed the test");
//   break;
//   default:
//   printf("Hmmm, not clear");
//  }
//  return 0;
// }

//structs in C
// int main() {

// struct Student {
//   char name[50];
//   int age;
//   char major[50];
//   double GPA;
//  };

// struct Student student1;
// strcpy(student1.name,"Jim");
// strcpy(student1.major,"Law");
// student1.GPA = 4.6;
// student1.age = 18;

// struct Student student2;
// strcpy(student2.name,"Pan");
// strcpy(student2.major,"Law");
// student1.GPA = 4.1;
// student1.age = 18;

// printf("%s", student1.major);
// }

// int main() {
//  int index = 1;

//   do{

// printf("%d\n",index);
// index++;
//  } while(index<=5);
// }

//guessing game
// int main() {
//  int secretNumber = 74;
// int userGuess;
// int guessCount = 1;

// printf("Guess a number: ");
// scanf("%d",&userGuess);

// while(userGuess != secretNumber && guessCount != 5) {
//  guessCount++;
//  printf("Guess again: ");
//  scanf("%d",&userGuess);
 
// }

// if(guessCount == 5) printf("You've guessed 5 times!, play again later.");


// if(userGuess == secretNumber) printf("You won, the secret number is %d!",userGuess);

// }

//for loop
// int main() {
//  for(int i = 1;i <= 5;i++) {
//   printf("%d\n",i);
//  }

//  return 0;
// }

//2D array and nested loops
// int main() {
//  int nums[5][3] = { {1,2}, {3,4}, {5,6} };
// for( int i = 0;i < 3;i++ ) {
// for(int j = 0;j < 2;j++) {
//  printf("%d, ",nums[i][j]);
// }
// printf("\n");
// }
//  return 0;
// }

//pointers and memory addresses
// int main() {
// int n = 89;
// int *pN = &n;
// char grade = 'B';
// char *pGrade = &grade;
// double gpa = 3.8;
// double *pGpa = &gpa;

// printf("n: %d\ngrade: %c\ngpa: %f",*pN,*pGrade,*pGpa);
// }

//writing files in C
// int main() {
//  FILE * f_pointer = fopen("employees.txt","w");
//  fprintf(f_pointer, "Employees");
//  fclose(f_pointer);
//  return 0;
// }

//updating files in C
// int main() {
//  FILE * f_pointer = fopen("employees.txt","a");
//  fprintf(f_pointer, "\nEmployees2");
//  fclose(f_pointer);
//  return 0;
// }

//reading files in C
// int main() {

//  char line[250];
//  FILE * f_pointer = fopen("employees.txt","r");

//  fgets(line,250,f_pointer);
//  fgets(line,250,f_pointer);
//  printf("%s",line);


//  return 0;
// }

//1. swap values between two variables
// int swap() {
// int A ,B,C;

// printf("Enter value of A: ");
// scanf("%d",&A);
// printf("Enter value of B: ");
// scanf("%d",&B);

// C = A;
// A = B;
// B = C;

// printf("A is %d and B is %d",A,B);

// }

// int main() {
// swap();

// return 0;
// }

//2. area of a circle
// int main() {
//  const double pie = 3.14;
//  double radius;
//  printf("Enter the radius of the circle: ");
//  scanf("%lf",&radius);

//  printf("The perimeter of the circle is %f\n",2*pie*radius);
//  printf("The area of the circle is %f",pie*(radius*radius));
// }

//3. determine even or odd integer
// int main() {
//  int num;

//  printf("Enter number: ");
//  scanf("%d",&num);

//  if(num % 2 == 0){ printf("Even");}
//  else {printf("Odd");}

//  return 0;
// }

//4.Calculate the sum of squares of a given input of numbers
// int main() {
//  //define 3 variables(2 input numbers and the result)
//  int n1,n2,result;

// //prompt user for first number and store it
//  printf("Enter first number: ");
//  scanf("%d",&n1);

//  //prompt user for second number and store it;
//  printf("Enter second number: ");
//  scanf("%d",&n2);

//  //calculate the sum of the squares of both numbers and assign the answer to the 'result' variable
//  result = pow(n1,2) + pow(n2,2);

//  //output the answer
//  printf("The sum of the square of %d and the square of %d is %d",n1,n2,result);

//return 0;
// }

// //5. Reads in three numbers and writes them all in sorted order
// int main() {
// //define three variables to store numbers
// int n1,n2,n3;

// //define three variables to print out 
// int o1,o2,o3;

// //prompt user to enter first number and store it
// printf("Enter first number: ");
// scanf("%d",&n1);

// // prompt user for second number and store it;
// printf("Enter second number: ");
// scanf("%d",&n2);

// //prompt user for third number and store it;
// printf("Enter third number: ");
// scanf("%d",&n3);

// if(n1 < n2 && n1 < n3 && n2 < n3) {
// o1 = n1;
// o2 = n2;
// o3 = n3;
// }


// else if(n1 < n2 && n1 < n3 && n3 < n2) {
// o1 = n1;
// o2 = n3;
// o3 = n2;
// }

// else if(n2 < n1 && n2 < n3 && n1 < n3) {
// o1 = n2;
// o2 = n1;
// o3 = n3;
// }

// else if(n2 < n1 && n2 < n3 && n3 < n1) {
// o1 = n2;
// o2 = n3;
// o3 = n1;
// }

// else if (n3 < n1 && n3 < n2 && n2 < n1) {
// o1 = n3;
// o2 = n2;
// o3 = n1;
// }

// else if (n3 < n1 && n3 < n2 && n1 < n2) {
// o1 = n3;
// o2 = n1;
// o3 = n2;
// }

// //output the numbers
// printf("In sorted order: %d %d %d",o1,o2,o3);

// return 0;
// }

/*6. A user will enter numbers that will be added to the sum and when a negative number is encountered,
stop adding numbers and write out the final result*/
// int main() {
// //define the variable for the sum and variable to store user input
// int sum = 0,n;

// //prompt user to enter number and store it
// do {
//  printf("Enter a number: ");
//  scanf("%d",&n);

// //check if n is positive because do..while loop always runs once despite the condition
//  if(n >= 0) {
//   sum += n;
//  }

// } while(n >= 0) ;//while the number is greater than or is 0, that is not less than 0, add the number to the sum


// //ouput result
// printf("The sum is %d", sum);


// }
