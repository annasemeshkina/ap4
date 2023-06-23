$(function(){
	$("#mask").delay(2000).slideUp(200);
});
$(document).ready(function() {
   	$(".w1").click(function() {
		$(".w2").removeClass("none");
 		$(".w3").removeClass("none");
 		$(".w4").removeClass("none");
   	$(".p2").addClass("none");
 		$(".p3").addClass("none");
 		$(".p4").addClass("none");
 		$(".w1").addClass("none");
		$(".psix").addClass("none");
		$(".yoga").addClass("none");
		$(".dvor").addClass("none");
    $(".zdanie2").removeClass("none");
		$(".p1").removeClass("none");
  });
});
$(document).ready(function() {
  	$(".w2").click(function() {
		$(".w1").removeClass("none");
		$(".w3").removeClass("none");
		$(".w4").removeClass("none");
  	$(".p1").addClass("none");
		$(".p3").addClass("none");
		$(".p4").addClass("none");
		$(".w2").addClass("none");
		$(".psix").addClass("none");
		$(".zdanie2").addClass("none");
		$(".zdanie").addClass("none");
		$(".yoga").addClass("none");
		$(".dvor").removeClass("none");
    $(".p2").removeClass("none");
  });
});
	$(document).ready(function() {
	  	$(".w3").click(function() {
			$(".w1").removeClass("none");
			$(".w2").removeClass("none");
			$(".w4").removeClass("none");
	  	$(".p1").addClass("none");
			$(".p2").addClass("none");
			$(".p4").addClass("none");
			$(".w3").addClass("none");
			$(".yoga").addClass("none");
			$(".zdanie2").addClass("none");
			$(".zdanie").addClass("none");
			$(".dvor").addClass("none");
			$(".spa").addClass("none")
			$(".psix").removeClass("none");
	    $(".p3").removeClass("none");
	  });
	});

	$(document).ready(function() {
			$(".w4").click(function() {
			$(".w1").removeClass("none");
			$(".w2").removeClass("none");
			$(".w3").removeClass("none");
			$(".p1").addClass("none");
			$(".p3").addClass("none");
			$(".p2").addClass("none");
			$(".w4").addClass("none");
			$(".zdanie2").addClass("none");
			$(".zdanie").addClass("none");
			$(".dvor").addClass("none");
			$(".psix").addClass("none")
			$(".yoga").removeClass("none");
			$(".p4").removeClass("none");
		});
	});
	$(document).ready(function() {
	   	$(".znachki").click(function() {
	 		$(".korzina").removeClass("none");
	  });
	});
	$(document).ready(function() {
			$(".maska").click(function() {
			$(".korzina").removeClass("none");
		});
	});
	$(document).ready(function() {
			$(".dnevnik").click(function() {
			$(".korzina").removeClass("none");
		});
	});
	$(document).ready(function() {
			$(".nakleyki").click(function() {
			$(".korzina").removeClass("none");
		});
	});
	$(document).ready(function() {
			$(".podushka").click(function() {
			$(".korzina").removeClass("none");
		});
	});
	$(document).ready(function() {
			$(".korzina").click(function() {
			$(".korzina").addClass("none");
		});
	});
