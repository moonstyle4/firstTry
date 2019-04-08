jQuery(document).ready(function(){
	
	$('.fa-bars').click(function(){
		
	$('header ul').slideToggle();	
	//$(this).hide();
	});
		$(".right").boxLoader({
    direction:"x",
    position: "50%",
    effect: "fadeIn",
    duration: "2s",
    windowarea: "70%"
}); 
$(".left").boxLoader({
    direction:"x",
    position: "-50%",
    effect: "fadeIn",
    duration: "2s",
    windowarea: "70%"
}); 
$(".bottom").boxLoader({
    direction:"y",
    position: "50%",
    effect: "fadeIn",
    duration: "2s",
    windowarea: "50%"
});
	
});//jquery
