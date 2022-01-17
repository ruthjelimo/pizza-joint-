var OrderNew = [];
function Pizza(pizzaFlavour,pizzaSize,pizzaCrust,pizzaTopping, PizzaNumber) {
    this.pizzaFlavour=pizzaFlavour;
    this.pizzaSize= pizzaSize;
    this.pizzaCrust=pizzaCrust;
    this.pizzaTopping=pizzaTopping;
    this.PizzaNumber=PizzaNumber;
}
var pizzaPrice= [1300,900,350,]
Pizza.prototype.totalPrice = function(){
    return (this.pizzaCrust + this.pizzaTopping + this.pizzaSize) * this.PizzaNumber
};
Pizza.prototype.pizzaS = function () {
    if (this.pizzaSize == 1300) {
        return "Large"
        
    } else if (this.pizzaSize == 900) {
        return "Medium"
    } else if (this.pizzaSize == 350) {
        return "Small"
    }
}
Pizza.prototype.pizzaC = function () {
    if (this.pizzaCrust == 130) {
        return "Thin"
        
    } else if (this.pizzaCrust == 180) {
        return "Thick"
    } else if (this.pizzaCrust == 250) {
        return "Stuffed"
    }
}
Pizza.prototype.pizzaT =function(){
    if (this.pizzaTopping == 120){
        return "sausage"
    }
    else if (this.pizzaTopping == 150){
        return "potato"
    }
    else if ( this.pizzaTopping == 200){
        return"Black olives"
    }
}

$("#checkout").click(function (event) {
    
    var PizzaFlavour = $("#Flavour").val();
    
    var PizzaSize = parseInt( $("#Size").val());
    
    var PizzaCrust = parseInt( $("#Crust").val());
    
    var PizzaTopping =parseInt( $("#Topping").val());
    
    var PizzaNumber =parseInt( $("#number").val());
    
    
    var newPizzae = new Pizza(PizzaFlavour, PizzaSize, PizzaCrust, PizzaTopping, PizzaNumber); 
    
    
    console.log(newPizzae)
    
    console.log(newPizzae.pizzaFlavour)
    OrderNew.push(newPizzae);
    console.log(OrderNew)
    
    $("#Flavour").val("");
    $("#Size").val("");
    $("#Crust").val("");
    $("#Topping").val("");
    $("#number").val("");
     
    totalAmount = 0
    for (let i = 0; i < OrderNew.length; i++ ){
        totalAmount += OrderNew[i].totalPrice();
        console.log(totalAmount)
    }
    
    $("#ordersTaken").append(
        "<tr>" +
        '<td scope="orderCalculation">' +
       newPizzae.pizzaFlavour +
        "</td>" +
        "<td>" +
        newPizzae.pizzaS () +
        " @ " +
        newPizzae.pizzaSize + 
        "</td>" +
        "<td>" +
        newPizzae.pizzaC () +
        " @ " +
        newPizzae.pizzaCrust + 
        "</td>" +
        "<td>" +
        newPizzae.pizzaT () +
        " @ " +
        newPizzae.pizzaTopping + 
        "</td>" +
        "<td>" +
        newPizzae.PizzaNumber +
        "</td>" +
        "<td>" +
        newPizzae.totalPrice() +
        "</td>" +
        "</tr>"

    );
    
    $("#ordersTaken").append("");
    if (OrderNew.length > 0) {
        $("#form-heading").empty();
        $("#form-heading").append("Make A New Order");
    }
    $("#totalAmount").fadeIn();
    $("#Checkout").fadeIn();
    $("#orderPut").fadeIn();
    $("#totalAmount").empty();
    $("#totalAmount").append(totalAmount);
    $("#totalAmount").show();
});
$("#Checkout").click(function () {
$(".checkout-info").show();
});
$("#checkoutForm").submit(function (event) {
event.preventDefault();
var name = $("#name").val();
var deliveryOption = $("#OptionDelivery").val();
NameOfCustomer = name;
$("#name").val("");
$("#OptionDelivery").val("");
$(".checkout-info").hide();
$("#Checkout").hide();
$("#totalAmount").empty();
if (deliveryOption === "deliver") {
    $(".deliveryLocation").show();
    $(".deliveryCost").show();
    $("#totalAmount").empty();
    $("#delivery-cost").append(100);
    totalAmount += 100;
    $("#totalAmount").empty();
    $("#totalAmount").empty();
$("#totalAmount").append(totalAmount);
$(".TotalAmount").show();
} else {
    alert("Dear, "+ NameOfCustomer + ": Your total bill is Ksh. " + totalAmount + ".Pick your order in the next thirty minutes." + " " + " We are always happy serving you,feel free to give us your compliments always.");
}                                                                                                                                                                                                                                
});
$("#locationForm").submit(function (event) {
event.preventDefault();
var estateEntered = $("#estate").val();
var houseNumberEntered = $("#houseNumber").val();
estate = estateEntered;
houseNumber = houseNumberEntered;
$("#Checkout").hide();
$(".deliveryLocation").hide();
$("#totalAmount").empty();
$("#totalAmount").append(totalAmount);
$(".TotalAmount").show();
alert("Dear " + NameOfCustomer + ": Your new total bill is Ksh. " + totalAmount + ". Deliveries for your order will be done to " + estate + ", " + houseNumber + " in the next forty five minutes" + "  .Make full payment on delivery." + "We are always happy serving you,feel free to give us your compliments always");
});
