function crazyCase(str) {

  let newStr= ''
  for (i=0;i<str.length;i++) {
    if (i % 2 ===0) {
    newStr = newStr + str[i].toLowerCase()
    } else {
    newStr = newStr + str[i].toUpperCase()
    }
  } 
  return newStr
}

const nextCrazyCase = crazyCase('hello')
console.log(nextCrazyCase);

const theNextCrazyCase = crazyCase('you')
console.log(theNextCrazyCase);

function ciEmailify(str) {
  let newStr= ''
  str = str.toLowerCase()
  for (i=0; i<str.length; i++) {
    if (str[i] === " ") {
      newStr = newStr + '.'
    } else {
      newStr = newStr + str[i]
    }
    }
  return newStr + '@codeimmersives.com'
  }



function exclaim(str) {
  let newStr= ''
  for (i=0;i<str.length;i++) {
    if (str[i]==='?') {
      newStr = newStr + '!'
    } else if (str[i]==='.') {
      newStr = newStr + '!'
    } else {
      newStr = newStr + str[i]
    }
  } 
  return newStr
}



function reverse(str) {
  let newStr= ''
  for (i=str.length-1;i>-1;i--) {
    newStr = newStr + str[i]
  }
  return newStr
}

function crazyCase2ReturnOfCrazyCase() {

  let newStr= ''
  for (i=0;i<str.length;i++) {
    if (i % 2 ===0 && str[i]!==" ") {
    newStr = newStr + str[i].toLowerCase()
    } else if (str[i] ===" "){
    newStr = newStr + str[i].toUpperCase()
    }
  } 
  return newStr
}

function titleCase(str) {
  let newStr= ''
  for (i=0;i<str.length;i++){
  if(i == 0){
    newStr = newStr + str[0].toUpperCase()
  }else{
  if (str[i-1] === ' ') {
  newStr = newStr + str[i].toUpperCase()}
  else {
  newStr = newStr + str[i].toLowerCase()
    }
    }
  }
    return newStr;
  }

  function onlyVowels(str) {
    let newStr=''
    for (i=0;i<str.length;i++){
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        newStr = newStr + str[i]
      }
      else if (str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
        newStr = newStr + str[i]
      }
    }
    return newStr
  }

function crazyCase3SonOfCrazyCase() {
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}