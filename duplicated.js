var name = [3,5,3,4,5,8,9,0,6,7,8];
var uniqueName = [];

for(var i= 0; i<name.length; i++){
    var element = name [i];
    var index = uniqueName.indexOf(element);
    if (index == -1){
        uniqueName.push(element);
    }
}
console.log(element);