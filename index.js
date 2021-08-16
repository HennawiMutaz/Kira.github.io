const nav = document.querySelector(".sub-nav");
window.addEventListener("scroll", () => {
	if(window.pageYOffset > 650) {
		nav.style.top = "0";
    nav.classList.add("active");
  }
  else {
		nav.style.top = "-100%";
    nav.classList.remove("active");
  }
});


const boxes = document.querySelectorAll(".our-team .wrapper .box");
boxes.forEach( (item) => {
		item.addEventListener("mouseover", () => {
			item.classList.add("box-active");
			item.classList.remove("box-inactive");
		});
		item.addEventListener("mouseout", () => {
			item.classList.add("box-inactive");
			item.classList.remove("box-active");
		});
});


window.onload = function(){
				const preloader = document.querySelector(".preloader");
				setTimeout(function () {
						preloader.style.top = "-100%"
				}, 5000);
				setTimeout(function () {
					preloader.style.display = "none";
				}, 10000);
    }

		anime({
  targets: '.square',
  scale: [
    {value: .1, easing: 'easeInSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1000}
  ],
  delay: anime.stagger(200, {grid: [20, 4], from: 'center'}),
	loop: true,
});



let flag = true;
window.addEventListener("scroll", () => {
	const circle = document.querySelectorAll(".our-services .anime .circle");
	if(window.pageYOffset > 2000 && flag) {
		flag = false;
		anime({
		  targets: '.our-services .anime .circle',
		  translateX: function(el) {
		    return el.getAttribute('data-x');
		  },
		  translateY: function(el, i) {
		    return 50 + (-50 * i);
		  },
		  scale: function(el, i, l) {
		    return (l - i) + .25;
		  },
		  rotate: function() { return anime.random(-360, 360); },
		  borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
		  duration: function() { return anime.random(1200, 1800); },
		  delay: function() { return anime.random(0, 400); },
		});

  }
});
