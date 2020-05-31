let cartItems=[
    {
        name:"Americano",
        price:250.00,
        image:"food_items/americano(250).jpg"
    },{
        name:"Black Coffee",
        price:200.00,
        image:"food_items/blackcoffee 200.jpg"
    },{
        name:"Cappucino",
        price:150.00,
        image:"food_items/cappucino (150).jpg"
    },{
        name:"Chocolate-Berry Latte",
        price:250.00,
        image:"food_items/cd-chocolaterasberrylatte(250).jpg"
    },{
        name:"Hazelnut Latte",
        price:200.00,
        image:"food_items/cd-hazelnut latte(200).jpg"
    },{
        name:"Pepermint Latte",
        price:300.00,
        image:"food_items/cd-peppermintlatte(300).jpg"
    },{
        name:"Doppio",
        price:290.00,
        image:"food_items/Doppio(290).jpeg"
    }
    ,{
        name:"Oreo Cake",
        price:800.00,
        image:"food_items/oreocake(800).jpg"
    }
    ,{
        name:"Rasberry Blueberry Cheesecake",
        price:600.00,
        image:"food_items/RasberryBlueberryCheesecake(600).jpg"
    }
    ,{
        name:"Red-Velvet Cake",
        price:750.00,
        image:"food_items/redvelvet(750).jpg"
    }
    ,{
        name:"Strawberry Cheesecake",
        price:750.00,
        image:"food_items/StrawberryCheesecake(750).jpg"
    },{
        name:"Vanilla Fruit Cake",
        price:500.00,
        image:"food_items/VanillaFruitCake.jpg"
    }
]
var TotalPrice=0;
$().ready(function () {
    LoadBuyItems();
});

function LoadBuyItems() {
    for (let index = 0; index < cartItems.length; index++) {
        var itemContainer=document.createElement("div");
        itemContainer.className="sale-item";
        var itemImg=document.createElement("img");
        itemImg.src=cartItems[index].image;
        var div=document.createElement("div");
        var h5=document.createElement("h5");
        h5.innerHTML=cartItems[index].name+" "+"( $"+cartItems[index].price+")";
        div.appendChild(h5);
        var btn=document.createElement("button");
        btn.innerHTML="Add";
        btn.setAttribute('onClick','AddCart('+index+')');
        div.appendChild(btn);
        itemContainer.appendChild(itemImg);
        itemContainer.appendChild(div);
        $(".item-container").append(itemContainer);
        
    }
}

function AddCart(index){
    var item=cartItems[index];
    var li=document.createElement("li");
    li.setAttribute('value',item.price);
    // li.setAttribute('onClick','RemoveItem('+li+')');
    CalculateTotal(item.price);

    li.innerHTML=item.name;
    $("#cartlist").append(li);
}

function CalculateTotal(price){
    TotalPrice+=price;
    $('#totalPrice').text('Total Price: $'+TotalPrice);
}

function ClearItems() {
    $("#cartlist").empty();
    TotalPrice=0;
    $('#totalPrice').text('Total Price: $'+TotalPrice);

}

function CheckOut(){
    if(TotalPrice==0){
        $("#modalbox div h4").text("No Items In Cart");
    }
    else{
        $('#modalbox div h4').text("Thanks For Shopping");
    }
    $('#modalbox').css("display","block");
}

function CloseModal() {
    $('#modalbox').css("display","none");
    
}