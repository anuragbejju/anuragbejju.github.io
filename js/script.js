document.addEventListener("DOMContentLoaded", function() {
		loadButtons();
});

function loadButtons() {
		var a = document.querySelectorAll("nav a");

		for (var i = 0; i < a.length; i++) {
				a[i].addEventListener("click", function(e) {
						e.preventDefault();
						s(".active").removeAttribute("class", "active");

						if (e.target.getAttribute("href") == null) {
								var url = e.target.parentNode.getAttribute("href");
								e.target.parentNode.setAttribute("class", "active");
						} else {
								var url = e.target.getAttribute("href");
								e.target.setAttribute("class", "active");
						}

						var pageLoad = function() {
								var pages = document.querySelectorAll(".page");

								for (var x = 0; x < pages.length; x++) {
										pages[x].style.display = "none";
								}
								


								if (url == "") {
										s("#page-1").style.display = "block";

								} else if (url == "awe") {
										s("#page-2").style.display = "block";

								} else if (url == "ed") {
										s("#page-3").style.display = "block";

								} else if (url == "sk") {
										s("#page-4").style.display = "block";

								}
								else if (url == "ap") {
										s("#page-5").style.display = "block";

								} else if (url == "sdr") {
										s("#page-6").style.display = "block";

								} else if (url == "htc") {
										s("#page-7").style.display = "block";
								}
								else if (url == "eca") {
										s("#page-8").style.display = "block";

								}
						}
						pageLoad();
				});
		}
}


//querySelector alternative: s();
function s(e) {
		return document.querySelector(e);
}
