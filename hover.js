var pro = document.getElementsByClassName("product");
for(let i = 0;i <pro.length; i++){
    pro[i].addEventListener("mouseover",_show);
}
function _show(event){
    var item = event.target;
    item.parentElement.getElementsByClassName("icon")[0].style.display="block"
    console.log(item);
}
for(let i = 0;i <pro.length; i++){
    pro[i].addEventListener("mouseout",_hide);
}
function _hide(event){
    var item = event.target;
    item.parentElement.getElementsByClassName("icon")[0].style.display="none"
    
}