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
    $("select#quantity").val("");
    $("select#pizza-size").val("");
    $("select#pizza-crust").val("");
    $("select#pizza-topping").val("");
      }

//user logic
$(document).ready(function() {
    $("form#new-pizza").submit(function(event) {
      event.preventDefault();
  
      var inputtedType = $("select#pizza-type").val();
      var inputtedQty = $("input#quantity").val();
      var inputtedSize = $("select#pizza-size").val();
      var inputtedCrust = $("select#pizza-crust").val();
      var inputtedTopping = $("select#pizza-topping").val();
      var inputtedTopQty=$("input#toppingQty").val();
      var total=totalPrice();

      var newPizza = new Pizza(inputtedType,inputtedQty, inputtedSize,inputtedCrust,inputtedTopping,inputtedTopQty);
  
      $("ul#order").append("<li><span class='order'>" +"TYPE:"+ newPizza.pizzaType+ "</span></li>",
                            "<li><span class='order'>" +"QUANTITY:"+ newPizza.pizzaQty+ "</span></li>",
                            "<li><span class='order'>" +"SIZE:"+ newPizza.pizzaSize+ "</span></li>",
                            "<li><span class='order'>" +"CRUST:"+ newPizza.pizzaCrust+ "</span></li>",
                            "<li><span class='order'>" +"TOPPING:"+ newPizza.pizzaTopping+ "</span></li>",
                            "<li><span class='order'>" +"QUANTITY:"+ newPizza.toppingQty+ "</span></li>",
                            "<li><span class='order'>" +"TOTAL:"+totalPrice.total+ "</span></li>",);
      
      resetFields();
      
    });
    $("#checkout").click(function() {
        $(".cart").show();
  
        
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
  