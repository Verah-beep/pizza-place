  //hover effect 

  $(document).ready(function() {
    $('.hover').hover(function(){
		$('.txt',this).slideToggle('slow');
	}, function(){
		$('.txt',this).slideToggle('slow');
    });

});