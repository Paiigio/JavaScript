var list = document.querySelector('.cart-items');
var rows = list.getElementsByClassName("cart-row");
function themvaogiohang(button) {
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('tieude')[0].innerText;
    var img = shopItem.getElementsByClassName('img')[0].src;
    var price = parseInt(shopItem.getElementsByClassName('gia')[0].innerText);
    // thêm sản phẩm không trùng trong giỏ hàng 
    var cart_title = list.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cart_title.length; i++) {
        if (cart_title[i].innerText == title) {
            alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
            return
        }
    }
    var new1 = document.createElement("div");
    var x =
        `<div class="cart-row">
             <div class="cart-item cart-column">
                 <img src="${img}" class="cart-item-image" width="100" height="100" alt="">
                 <span class="cart-item-title">${title}</span>
                 </div>
             <span class="cart-price cart-column">${price}</span>
             <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" onchange="tinhTong()" type="number" value="1">
                 <button class="btn btn-danger" type="button" onclick="xoa(this)">Xóa</button> 
             </div>
         </div>`;
         new1.innerHTML=x;
         list.appendChild(new1);
    // số lượng lớn hơn bằng 1
    var quantity_input = document.getElementsByClassName("cart-quantity-input");
    for (var i = 0; i < quantity_input.length; i++) {
        var input = quantity_input[i];
        input.addEventListener("change", function (button) {
            var input = button.target
            if (input.value <= 0) {
                input.value = 1;      
                alert("Số lượng sản phẩm phải >= 1")
            }tinhTong();
        })      
    }tinhTong();  
}


// xóa sản phẩm
function xoa(button) {
    var row = button.parentElement.parentElement;
    list.removeChild(row);
    tinhTong();
}
function tinhTong() {
    var rows = list.getElementsByClassName("cart-row");
    var tong = 0;
    var tongfull = 0;
    for (let i = 0; i < rows.length; i++) {
        let gia = Number(rows[i].getElementsByClassName("cart-price")[0].innerText);
        let soluong = Number(rows[i].getElementsByClassName("cart-quantity-input")[0].value);
        tong += Number(gia * soluong);
    }
    tongfull = Number(tong);
    document.getElementById('tong1').innerText = tongfull;
}
function thanhtoan() { 
    location.reload(); 
    alert("cảm ơn bạn đã mua hàng");  
}