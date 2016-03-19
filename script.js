$(document).ready(function (){

			$(".portfolio").click(showPortfolio);
					function showPortfolio() {
					$(".portfolio-links").slideToggle();
				}

			$(".ga").click(showGa);
			 		function showGa() {
			 		$(".ga-links").slideToggle();
			 	}

		  $(".contacts").click(showContacts);
		  		function showContacts() {
		  		$(".contacts-links").slideToggle();
		 		}

});
