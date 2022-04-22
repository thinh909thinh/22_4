var element=document.getElementsByClassName('hot')
console.log(element)
if(element.length>2){
    var el=element[2];
    var qq=element[1];
    el.className='cool'
    qq.className='cool'
}
