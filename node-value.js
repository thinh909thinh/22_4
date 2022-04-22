var iteam =document.getElementById('two')
var elText=iteam.firstChild.nodeValue

console.log(iteam)
console.log(elText)
// gia tri elText=pine nuts
elText=elText.replace('pine nuts ','kake')
// bien doi elText(pine nust) thanh kake
iteam.firstChild.nodeValue=elText
// gan lai gia tri dau tien trong class two banwg elText