var newEl =document.createElement('li')
console.log(newEl)
var newText=document.createTextNode('quinoa')
console.log(newEl)
newEl.appendChild(newText)

var position=document.getElementsByTagName('ul')[0]
position.appendChild(newEl)