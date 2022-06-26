function shout(string){
    return string.toUpperCase("Hello!");
}

function whisper(string){
    return string.toLowerCase("HELLO!");
}

function logShout(string){
    console.log(string.toUpperCase("Hello!"));
}

function logWhisper(string){
    console.log(string.toLowerCase("HELLO!"));
}

function sayHiToHeadphonedRoommate(string){
    if (string === "hello"){
        return 'I can\'t hear you!'
    } else if (string === "HELLO"){
        return 'YES INDEED!'
    } else if (string === "Let\'s have dinner together!"){
        return 'I would love to!'
    }

}

sayHiToHeadphonedRoommate("hello");
sayHiToHeadphonedRoommate("HELLO");
sayHiToHeadphonedRoommate("Let\'s have dinner together!");

console.log(sayHiToHeadphonedRoommate("hello"));
console.log(sayHiToHeadphonedRoommate("HELLO"));
console.log(sayHiToHeadphonedRoommate("Let\'s have dinner together!"));