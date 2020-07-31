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

function totalPrice(){
    var large=1200.00;
    var regular=900.00;
    var small=500.00;
    var size=document.getElementById("pizza-size").value;
    var pizzaQty=parseInt(document.getElementById("quantity").value);
    var toppingQty=parseInt(document.getElementById("toppingQty").value);
      
        if(size="large"){
          total=(large*pizzaQty)+((large/10)*toppingQty);
        }
        else if(size="regular"){
          total=(regular*pizzaQty)+((large/10)*toppingQty);
        }
        else if(size="small"){
          total=(small*pizzaQty)+((small/10)*toppingQty);
        }
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
     

      var newPizza = new Pizza(inputtedType,inputtedQty, inputtedSize,inputtedCrust,inputtedTopping,inputtedTopQty);
  
      $("ul#order").append("<li><span class='order'>" +"TYPE:"+ newPizza.pizzaType+ "</span></li>",
                            "<li><span class='order'>" +"QUANTITY:"+ newPizza.pizzaQty+ "</span></li>",
                            "<li><span class='order'>" +"SIZE:"+ newPizza.pizzaSize+ "</span></li>",
                            "<li><span class='order'>" +"CRUST:"+ newPizza.pizzaCrust+ "</span></li>",
                            "<li><span class='order'>" +"TOPPING:"+ newPizza.pizzaTopping+ "</span></li>",
                            "<li><span class='order'>" +"QUANTITY:"+ newPizza.toppingQty+ "</span></li>",
                            );
      
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
  