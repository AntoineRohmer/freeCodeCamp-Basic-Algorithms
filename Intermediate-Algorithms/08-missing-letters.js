function fearNotLetter(str) {
  var check;
  var charCode;
  for(var i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) + 1 === str.charCodeAt(i + 1)) {
    } else {
      charCode = str.charCodeAt(i) + 1;
      return String.fromCharCode(charCode);
    }
  }
  check = undefined;
  return check;
}

fearNotLetter("abce");
