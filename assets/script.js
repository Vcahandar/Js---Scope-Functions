"use strict"


// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.


// function sum(num){

//     if(num%3==0 && num%7==0){
//         console.log("Bolunur");
//     }
//     else{
//         console.log("Bolunmur");
//     }
// }

// sum(21);


// let sum =(num)=>{
//     if (num%3==0&& num%7==0){
//         console.log("Bolunur")
//     }else{
//         console.log("Bolunmur")
//     }
// }

// sum(21)


//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

// function getFactorial(num){
//     let factorial=1;

//     for(let i=1; i <=num; i++){
//         factorial*=i;
//     }
//     console.log(factorial)

// }

// getFactorial(7);


// let getFactorial=(num)=>{
//     let factorial=1;

//     for(let i=1; i<=num; i++){
//         factorial*=i;
//     }
//     console.log(factorial)
// }

// getFactorial(7)


// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// let arr = [1,2,3,4,5,6]

// sumEvenNumsOfArray(arr);

// function sumEvenNumsOfArray(arr){
//     let sum=0;
//     let multipe=1;

//     for(let i=1;i<arr.length; i++){
//         if(arr[i]%2==0){
//             multipe=arr[i]**2;
//             sum+=multipe;
//         }
//     }
//     console.log(sum)
// }

// let arr = [1,2,3,4,5,6]


// let sumEvenNumsOfArray=(arr)=>{
//     let sum=0;
//     let multipe=1;
//     for( let i=1; i<arr.length; i++){
//         if(arr[i]%2==0){
//             multipe=arr[i]**2;
//             sum+=multipe;
//         }
//     }
//     console.log(sum)

// }

// sumEvenNumsOfArray(arr)


// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.


// function login(email,password){

//     if(email=="cavid@code.edu.az"&& password==12345){
//         console.log("Girish Olundu")
//     }
//     else{
//         console.log("email ve ya parol sehfdir")
//     }
// }

// login("cavid@code.edu.az",12345)


// let login=(email,password)=>{
//     if(email=="cavid@code.edu.az"&&password==12345){
//         console.log("Girish olundu")
//     }else{
//         console.log("email yada parol sehfdir")
//     }
// }

// login("cavid@code.edu.az",12345)


// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini
//  qaytarmalidir.



// let arr = [1, 2, 3, 4, 5, 6]

// function getSumOddNums(arr) {

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             sum += arr[i];
//         }
//     }
//    console.log(sum)
// }

// getSumOddNums(arr)


// let arr = [1,2,3,4,5,6,7]

// let getSumOddNums = (arr) => {

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++)
//      {
//         if (arr[i] % 2 == 1) {
//             sum+= arr[i];
//         }
//     }
//     console.log(sum);
// }

// (getSumOddNums(arr));


//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCountEvenNums(arr) {

//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(getCountEvenNums(arr));


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let getCountEvenNums = (arr) => {

//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(getCountEvenNums(arr));


