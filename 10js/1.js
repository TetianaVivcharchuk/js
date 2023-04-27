window.onload = ()=>{
      /*1*/
 let div = document.querySelector('.div');
  div.addEventListener('keydown', function (e) {
        console.log(e);
      	if(e.code === "ArrowRight" ){
      div.setAttribute('style','margin:5 rem 5 rem 5 rem 10 rem;');
}
if(e.code === "ArrowLeft" ){
      div.setAttribute('style','margin:5 rem 5 rem 10 rem 5 rem;');
}
else if(e.code === "ArrowDown" ){
      div.setAttribute('style',';margin:10 rem 5 rem 5 rem 5 rem;;');
}
else if(e.code === "ArrowUp" ){
      div.setAttribute('style',';margin:5 rem 10 rem 5 rem 5 rem;;');
}

})
}


