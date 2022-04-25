// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(arrO){
  arr = arrO.reverse();
  
let copy =[];let i=0; letsum=0;
copy[0]=arr[0];
sum=copy[0];
i++;

while(i<arr.length){
	let temp=arr[i]*2;
	if (temp>9)
		copy[i]= (arr[i]*2) - 9;
	else
		copy[i]= (arr[i]*2);
sum=sum+copy[i];

if(i==15)
break;
i++;
copy[i] = arr[i];
sum=sum+copy[i];
i++;
} //end of while
if(sum%10 == 0)
return true;
else return false;
}//end Of fn
//console.log(validateCred(valid1));
function findInvalidCards(nestedArr){
  let invalid=[];
for(let i=0;i<nestedArr.length;i++)
{
  let check = validateCred(nestedArr[i]);
  if(check == false)
  invalid.push(nestedArr[i]);

}
return invalid;
 } //end of fn
function idInvalidCardCompanies(nestedArrOfInvalidNumbers){
  let compList=[];
 for(let k=0;k<nestedArrOfInvalidNumbers.length;k++){
   let check=nestedArrOfInvalidNumbers[k][0];
  if ((check == 3)&&(compList.findIndex(i => {
  return i=='Amex';
}))==-1){
compList.push('Amex');
}
  else if ((check == 4)&&(compList.findIndex(i => {
  return i=='Visa';
}))==-1){
compList.push('Visa');
}
 else if ((check == 5)&&(compList.findIndex(i => {
  return i=='MasterCard';
}))==-1){
compList.push('MasterCard');
}
 else if ((check == 6)&&(compList.findIndex(i => {
  return i=='Discover';
}))==-1){
compList.push('Discover');
}
   else
   console.log('Company not Found');


 } //end of for

return compList;
}//end of fn
//console.log(findInvalidCards(batch));
//const badBatch = [[3, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5],[4, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]]

//console.log(idInvalidCardCompanies(badBatch));




