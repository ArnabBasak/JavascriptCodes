function placeAnOrder(orderNumber)
{
    console.log("Customer order:",orderNumber)

    cookAndDeliveredFood(function (){
        console.log("Delivered food for the order number:",orderNumber)
    });  
}

//simulate a 5 sec operation
function cookAndDeliveredFood(callback)
{
    setTimeout(callback,5000)
}

//Simulate users web request
placeAnOrder(1)
placeAnOrder(2)
placeAnOrder(3)
placeAnOrder(4)
placeAnOrder(5)
placeAnOrder(6)
