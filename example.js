var list=document.getElementsByTagName('ul')[0]
var newIteamLast=document.createElement('li')
var newTextLast=document.createTextNode('cream')
newIteamLast.appendChild(newTextLast)
list.appendChild(newIteamLast)
var newIteamFirst=document.createElement('li')
var newTextFirts=document.createTextNode('kale')
newIteamFirst.appendChild(newTextFirts)
list.insertBefore(newIteamFirst,list.firstChild)
var listItems=document.querySelectorAll('li')
var i
for(i=0;i<listItems.length;i++){
    listItems[i].className='cool'
}
console.log(listItems)
var heading =document.querySelector('h2')
var headingText=heading.firstChild.nodeValue
var totalIteam=listItems.length
var newHeading=headingText+'<span>' +totalIteam+'</span>'
heading.innerHTML=newHeading
console.log(newHeading)