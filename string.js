var speech = "I am a good person.I don't snore at night. ";

var count = 0;
for (var i = 0; i<speech.length; i++){
    var char = speech[i-1] !=" ";
    if(char == " " && speech[i]){
        count++;
    }
}

console.log(count);