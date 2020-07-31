  //business logic
function Pizza(type,quantity,size,crust,topping,topqty){
    this.pizzaType=type;
    this.pizzaQty=quantity;
    this.pizzaSize=size;
    this.pizzaCrust=crust;
    this.pizzaTopping=topping;
    this.toppingQty=topqty;
    
    }

function resetFields(){
    $("select#pizza-type").val("");
    $("input#quantity").val("");
    $("select#pizza-size").val("");
    $("select#pizza-crust").val("");
    $("select#pizza-topping").val("");
    $("input#toppingQty").val("");
    
      }
function validate(){
  var inputtedType = $("select#pizza-type").val();
      var inputtedQty = $("input#quantity").val();
  if(inputtedType==""|| inputtedQty==""){
    alert("invalid input!");
    
  }
}

function totalPrice(){
    var large=1200;
    var regular=900;
    var small=500;
    var size=document.getElementById("pizza-size").value;
    var pizzaQty=parseInt(document.getElementById("quantity").value);
    var toppingQty=parseInt(document.getElementById("toppingQty").value);
     
    if (size="large"){
        total=(large*pizzaQty)+((large/10)*toppingQty);
        document.getElementById("all").value="total:"+total;    
        return false;
    }
    else if(size="regular"){
        total=(regular*pizzaQty)+((regular/10)*toppingQty);
        document.getElementById("all").value=" total:"+total;
        return false;
    }
    else{
        total=(small*pizzaQty)+((small/10)*toppingQty);
        document.getElementById("all").value=" total:"+total;
        return false;
    }
}
function deliver(){
  var checkBox = document.getElementById("delivery");
  var deliver=250+total;
  if (checkBox.checked == true){
    $("ul#order").append("<li><span class='order'>" +"DELIVERY:250/="+"</span></li>");
    document.getElementById("all").value="Grand total:"+deliver;
    $(".location").show();  
  }
  if(checkBox.checked == false){
    document.getElementById("all").value=" total:"+total;
    $('ul#order li').last().remove();
    $(".location").hide();
  }
  
}
function message(){
  var checkBox = document.getElementById("delivery");
  if (checkBox.checked == true){
    alert("Your delivery is enroute. Thank you for shopping at Pizza Place.");
  }
  if (checkBox.checked == false){
    alert("Thank you for shopping at Pizza Place.");
  }
}

//user logic
$(document).ready(function() {
    $("form#new-pizza").submit(function(event) {
      event.preventDefault();
      validate();
  
      var inputtedType = $("select#pizza-type").val();
      var inputtedQty = $("input#quantity").val();
      var inputtedSize = $("select#pizza-size").val();
      var inputtedCrust = $("select#pizza-crust").val();
      var inputtedTopping = $("select#pizza-topping").val();
      var inputtedTopQty=$("input#toppingQty").val();
     

      var newPizza = new Pizza(inputtedType,inputtedQty, inputtedSize,inputtedCrust,inputtedTopping,inputtedTopQty);
  
      $("ul#order").append("<li><span class='order'>" +"TYPE:"+ newPizza.pizzaType+ "</span></li>",
                            "<li><span class='order'>" +"SIZE:"+ newPizza.pizzaSize+ "</span></li>",
                            "<li><span class='order'>" +"QUANTITY:"+ newPizza.pizzaQty+ "</span></li>",
                            "<li><span class='order'>" +"CRUST:"+ newPizza.pizzaCrust+ "</span></li>",
                            "<li><span class='order'>" +"TOPPING:"+ newPizza.pizzaTopping+ "</span></li>",
                            "<li><span class='order'>" +"QUANTITY:"+ newPizza.toppingQty+ "</span></li>",
                            );
      
      
      
    });
    $("#checkout").click(function() {
        
        $(".cart").show();
        $(".final").show();
       
        
        
      });  
  });
  $(document).ready(function() {
    $("#complete").click(function(event) {
      event.preventDefault();
      message();
      resetFields();
      $('ul#order li').remove();
      $(".cart").hide();
      $(".final").hide();
      $(".location").hide();
      
    });
  });
  //hover effect 

  $(document).ready(function() {
    $('.hover').hover(function(){
		$('.txt',this).slideToggle('slow');
	}, function(){
		$('.txt',this).slideToggle('slow');
    });

});

  //browse buttons
  $(document).ready(function(){
    $("#crust").click(function() {
      $(".crusts").show();
      $(".pizzas").hide();
      $(".toppings").hide();
    });
    $("#pizza").click(function() {
      $(".pizzas").show();
      $(".crusts").hide();
      $(".toppings").hide();
    });
    $("#topping").click(function() {
      $(".toppings").show();
      $(".crusts").hide();
      $(".pizzas").hide();
    });
  });
  