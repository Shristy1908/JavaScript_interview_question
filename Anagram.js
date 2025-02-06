var s = "shristy";
var t = "stifgty";

if (s.length != t.length) {
  console.log("Not anagram");
} 
else {
  var s1 = s.split("").sort().join("");
  var t1 = t.split("").sort().join("");

  if (s1 === t1) {
    console.log("Anagram");
  } else {
    console.log("Not anagram");
  }
}
