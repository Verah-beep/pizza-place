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
  