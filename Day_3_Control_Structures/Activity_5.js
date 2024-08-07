/* Activity 5: Combining conditions
Task 7: Write a program to check if a year is a leap year using multiple conditoins(divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
*/
year=2000;
if(year%4==0){
    console.log("Year is leap year");
}
else if(year%400==0){
    console.log("Year is leap !")
}
else if(year%100==0){
    console.log("year is leap ");
}
else{
    console.log('year is not a leap year !')
}