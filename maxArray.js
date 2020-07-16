/** var marks = [45,81,63,98,56,35,23]
var max = marks[0];
for (var i =0; i<marks.length;i++){
    var element = marks[i];
    if (element > max){
        max = element;
    }
}
console.log("highest value is:",max);
/*/
var number = [45,65,78,12,34,54,65];
var sum =0 ;
for(var i =0; i<number.length;i++){
    var element = number[i];
    sum=sum+element;

}
console.log("total number of array ",sum);

function getArraySum(number){
    var sum =0
}
function getArraySum(number){
    var sum = 0 ;
for(var i =0; i<number.length;i++){
    var element = number[i];
    sum = sum + element;
    }
    return sum;
}
var number = [45,65,78,12,34,54,65];
var result = getArraySum(number);
console.log("total of the numbers:", result);