function shout(string) {
  return string.toUpperCase()
}


function whisper(string) {
  return string.toLowerCase()
}


function logShout(string) {
  console.log(string.toUpperCase())
}


function logWhisper(string) {
  console.log(string.toLowerCase())
}


function sayHiToGrandma(string) {
  var response1 = 'I can\'t hear you!'
  var response2 = 'YES INDEED!'
  var response3 = 'I love you, too.'
  
  if (string.toLowerCase() === string) {
    console.log(response1)
  } else if (string.toUpperCase() === string) {
    console.log(response2)
  } else if (string === 'I love you, Grandma.') {
    console.log(response3)
  } else {
    return
  }
}














