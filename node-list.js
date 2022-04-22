var hotIteam =document.querySelectorAll('li.hot')
if (hotIteam.length>0){
    for(var i=0;i<hotIteam.length-1;i++){
        hotIteam[i].className='cool'
    }
}