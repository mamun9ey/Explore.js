function inchTofeet(inch){
    var feet =inch/12;
    return feet;
}
var senior =[156,288,300];
var nanafeet= inchTofeet(senior[0]);
console.log(nanafeet);
var nanifeet = inchTofeet(288);
console.log(nanifeet);
var dadifeet=inchTofeet(300);
console.log(dadifeet);