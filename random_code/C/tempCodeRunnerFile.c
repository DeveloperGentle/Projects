
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