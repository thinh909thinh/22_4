var firstIteam =document.getElementById('one')
var hi=firstIteam.hasAttribute('id')
console.log(hi)
if(firstIteam.hasAttribute('id')){
    var attr=firstIteam.getAttribute('id')
    console.log(attr)
    var el =document.getElementById('scriptResults')
    el.innerHTML='<p> the frist iteam há a class name '+ attr+'</p>'
}