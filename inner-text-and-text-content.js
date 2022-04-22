var firstIteam =document.getElementById('one')
console.log(firstIteam)
var showTextConttent= firstIteam.textContent
console.log(showTextConttent)
var showInnerText=firstIteam.innerText
console.log(showInnerText)

var el=document.getElementById('scriptResults')
var msg = '<p> textcontent:' +showInnerText+'</p>'

el.innerHTML=msg
firstIteam.textContent='sourdogh'
console.log(firstIteam)