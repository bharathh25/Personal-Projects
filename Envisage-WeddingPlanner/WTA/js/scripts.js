function Wedding(firstName,lastName, phone,country, email,eventDetails,date,eventType, number,preferedVenues,price) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.country = country;
    this.email = email;
    this.eventDetails = eventDetails;
    
    this.date = date;
    this. eventType = eventType;
    this. number = number;
    this. preferedVenues = preferedVenues;
    this.price = price;
   
  }
  Wedding.prototype.fullBook = function() {
    return (
      this.firstName +
      " " +
      this.lastName +
      " " +
      this.phone +
      " " +
      this.country +
      " " +
      this.email +
      " " +
      this.eventDetails +
      " " + 
      this.date +
      " " + 
      this.eventType +
      " " + 
      this.number +
      " " + 
      this.preferedVenues +
      " " + 
      this.price
    );
  };
  
  $(document).ready(function() {
    $("#btn").click(function() {
       $("form#form").submit(function(event) {
           event.preventDefault();
  
      var fName = $("input#firstName").val();
      var lName = $("input#lastName").val();
      var phon = $("input#phone").val();
      var countr = $("input#country").val();
      var emai = $("input#email").val();
      var dFlex = $("input#flexible").val();
      var dat = $("input#date").val();
      var typ = $("select#type").val();
      var numbers = $("input#number").val();
      var preff = $("select#preffered").val();
     
      
    //   $("ul#we").append("<li><span class='contact'>" + newBook.fullBook() + "</span></li>");
​
​
if(preff === "Arena Wedding Hall" && typ === "Reception"){
      prices = 2000000;
}
else if(preff === "Arena Wedding Hall" && typ === "Dowry")
{
    prices = 1500000;
}else if(preff === "Convention Wedding Hall" && typ === "Dowry")
{
    prices = 1400000;
}
else if(preff === "Convention Wedding Hall" && typ === "Reception")
{
    prices = 1800000;
}
else if(preff === "Heaven Garden Rebero" && typ === "Reception")
{
    prices = 1000000;
}
else if(preff === "Heaven Garden Rebero" && typ === "Dowry")
{
    prices = 800000;
}
else if(preff === "Serena Wedding Hall" && typ === "Dowry")
{
    prices = 700000;
}
else if(preff === "Serena Wedding Hall" && typ === "Reception")
{
    prices = 800000;
}
else if(preff === "Marriot Wedding Hall" && typ === "Dowry")
{
    prices = 900000;
}
else if(preff === "Marriot Wedding Hall" && typ === "Reception")
{
    prices = 1000000;
}
else if(preff === "Ituze Garden" && typ === "Dowry")
{
    prices = 400000;
}
else if(preff === "Ituze Garden" && typ === "Reception")
{
    prices = 600000;
}
else if(preff === "La palme wedding Hall" && typ === "Dowry")
{
    prices = 500000;
}
else if(preff === "La palme wedding Hall" && typ === "Reception")
{
    prices = 700000;
}
else if(preff === "Greenwich wedding Hall" && typ === "Dowry")
{
    prices = 300000;
}
else if(preff === "Greenwich wedding Hall" && typ === "Reception")
{
    prices = 550000;
}
else if(preff === "Hill View wedding Hall" && typ === "Dowry")
{
    prices = 400000;
}
else if(preff === "Hill View wedding Hall" && typ === "Reception")
{
    prices = 600000;
}
else{
    alert("Try again");
}
​
​
​
​
​
​
var prices;
      var newBook = new Wedding( fName,lName,phon,countr,emai,dFlex,dat,typ,numbers,preff,prices);
      console.log(newBook);
​
      $("#show-order").show();
      //   $("#show-order h2").text(newBook.type);
        $(".firstName").text(newBook.firstName);
        $(".lastName").text(newBook.lastName);
        $(".phone").text(newBook.phone);
        $(".country").text(newBook.country);
        $(".email").text(newBook.email);
        $(".datef").text(newBook.eventDetails);
        $(".date").text(newBook.date);
        $(".type").text(newBook.eventType);
        $(".number").text(newBook.number);
        $(".preffered").text(newBook.preferedVenues);
        $(".price").text(newBook.price);
​
​
console.log(prices);
});
});
});
document.getElementById("btns").addEventListener("click", function () { 
   
    alert(" message sent !  Thank you for being our valued customer.    We are grateful for the pleasure of making your wedding more special .once again thank you !!");
});
​
//   $(".btn").click(function() {
//   var preffe = $("select#preffered").val();
//   var type = $("select#type").val();
//   var total ,price; 
​
 
​
​
​
//   switch (preffe) {
//     case preferedVenues= "Arena wedding Hall":
//         switch (type) {
//             case eventType = "Reception":
//                 price = 2,000,000 frw;
//                 if (cruste === "Thin Crust") {
//                     total = (price * number) +500;
//                 } else if (cruste === "Thick Crust") {
//                     total = (price * number)+ 1000;
//                 } else if (cruste === "Deep Crust") {
//                     total = (price * number)+ 2000;
//                 }else if (cruste === "Crunchy Crust") {
//                   total = (price * number)+ 2500; 
//                 }else {
//                     total = (price * number) + 3500;
//                 }
//                 break;
//             case size = "Medium":
//                 price = 5500;
//                 if (cruste === "Thin Crust") {
//                  total = (price * number) +1000;
//              } else if (cruste === "Thick Crust") {
//                  total = (price * number)+ 1500;
//              } else if (cruste === "Deep Crust") {
//                  total = (price * number)+ 2000;
//              }else if (cruste === "Crunchy Crust") {
//                total = (price * number)+ 2500; 
//              }else {
//                  total = (price * number) + 4000;
//              }
//               break;
//             case size = "Large":
//                 price = 5500;
//                 if (cruste === "Thin Crust") {
//                  total = (price * number) +2000;
//              } else if (cruste === "Thin Crust") {
//                  total = (price * number)+ 3000;
//              } else if (cruste === "Deep Crust") {
//                  total = (price * number)+ 4000;
//              }else if (cruste === "Crunchy Crust") {
//                total = (price * number)+ 5000; 
//              }else {
//                  total = (price * number) + 6000;
//              }
//              break;
//         }
//         break;
​
​
​
​
​
​
​
​
​
​
​
//       // $("ul#we").append("<li><span class='contact'>" + newBook.fullOrder() + "</span></li>");
  
//       // $(".contact").last().click(function() {
//         $("#show-order").show();
//           $("#show-order h2").text(newBook.type);
//           $(".first-name").text(newBook.firstName);
//           $(".name1").text(newBook.type);
//           $(".name2").text(newBook.size);
//           $(".name3").text(newBook.crust);
//           $(".name4").text(newBook.popping);
//           $(".name5").text(newBook.number);
//           $(".Total").text(newBook.totalPrice);
//           $("ul#addresses").text(" ");
//           newBook.order.forEach(function(address){
//             $("ul#addresses").append("<li>" + address.fullOrder() + "</li>");
//           // });
//     });
//     $("select#type").val('');
//     $("select#size").val('');
//     $("select#crust").val('');
//     $("select#popping").val('');
   
  
  
//     switch (pizzaT) {
//       case (type = "margarta pizza"):
//         switch (sizes) {
  
  
//           case (size = "Small"):
//             price = 4000;
//             if (crusts === "Crispy" && crusts === "Stuffed" && crusts === "Glutten-free") {
//               total= (price * numbers) + 1000;
//             } 
//             break;
//           case (size = "Medium"):
//             price = 5000;
//             if (crusts === "Crispy" && crusts === "Stuffed" && crusts === "Glutten-free") {
//               total= price * numbers + 1000;
//             }
//             break;
//           case (size = "Large"):
//             price = 8000;
//             if (crusts === "Crispy"&& crusts === "Stuffed" && crusts === "Glutten-free") {
//               total= price * numbers + 1000;
//             } 
//             break;
//         }
//         break;
  
//       case (type = "Hawaian"):
//         switch (sizes) {
//           case (size = "Small"):
//             price = 4000;
//             if (crusts === "Crispy" && crusts === "Stuffed" && crusts === "Glutten-free") {
//               total= price * numbers + 1000;
//             }
//             break;
//           case (size = "Medium"):
//             price = 6000;
//             if (crusts === "Crispy" && crusts === "Stuffed" && crusts === "Glutten-free") {
//               total= price * numbers + 1000;
//             } 
//             break;
  
//           case (size = "Large"):
//             price = 7000;
//             if (crusts === "Crispy"&& crusts === "Stuffed" && crusts === "Glutten-free") {
//               total= price * numbers + 1000;
//             }
//         }
//         break;
//       case (type = "Vegetarian"):
//         switch (sizes) {
//           case (size = "Small"):
//             price = 1000;
//             if (crusts === "Crispy" && crusts === "Stuffed" && crusts === "Glutten-free") {
//               total= price * numbers + 1000;
//             }
//             break;
//           case (size = "Medium"):
//             price = 4000;
//             if (crusts === "Crispy" && crusts === "Stuffed" && crusts === "Glutten-free") {
//               total= price * numbers + 1000;
//             }
//             break;
//           case (size = "Large"):
//             price = 6000;
//             if (crusts === "Crispy" && crusts === "Stuffed" && crusts === "Glutten-free") {
//               total= price * numbers + 1000;
//             } 
//             break;
//         }
//         break;
//       case (type = "Pepperoni"):
//         switch (sizes) {
//           case (size = "Small"):
//             price = 4000;
//             if (crusts === "Crispy" && crusts === "Stuffed" && crusts === "Glutten-free") {
//               total= price * numbers + 1000;
//             }
//             break;
//           case (size = "Medium"):
//             price = 6000;
//             if (crusts === "Crispy" && crusts === "Stuffed" && crusts === "Glutten-free") {
//               total= price * numbers + 1000;
//             } 
//             break;
//           case (size = "Large"):
//             price = 10000;
//             if (crusts === "Crispy" && crusts === &q...
