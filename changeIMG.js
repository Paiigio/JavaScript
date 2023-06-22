// function xuathien(){
//     alert("chào mừng bạn đến vé tàu điện tử")
// }
var arr_hinh=[
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpeg",
]
var index=0;
function next(){
    index++;
    if(index>=arr_hinh.length)index=0;
    var hinh= document.getElementById("hinh");
    hinh.src=arr_hinh[index];
    document.getElementById("dem").innerHTML=""+(index+1)+"/"+arr_hinh.length;
}
function back(){
    index--;
    if(index<0)index= arr_hinh.length-1;
    var hinh= document.getElementById("hinh");
    hinh.src=arr_hinh[index];
    document.getElementById("dem").innerHTML=""+(index+1)+"/"+arr_hinh.length;
}
setInterval("next()",2000);

