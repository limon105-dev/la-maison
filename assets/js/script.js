$(document).ready(function () {
	'use strict';
	// navbar js start ---
	$(window).on('load scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navbar').addClass('nav-fixed')
		} else {
			$('.navbar').removeClass('nav-fixed')
		}
	})

	$(".ham-menu").click(function (event) {
		event.stopPropagation();
		$(".navbar-inner-bottom").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".nav-link-wrapper").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".mobile-menu-close-window-btn").click(function (event) {
		event.stopPropagation();
		$(".navbar-inner-bottom").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".nav-link-wrapper").toggleClass("active");
		$("body").toggleClass("active");
	});
	// navbar js end ---

	// collection-filter js start---
	$(".filter-open-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").addClass("active");
		$("body").addClass("active");
	});

	$(".filter-close-btn").click(function (event) {
		event.stopPropagation();
		$(".collection-filter").removeClass("active");
		$("body").removeClass("active");
	});
	// collection-filter js end---

	// collection tab js start---
	$('.collection-tab-link').click(function () {
		$('.collection-tab-link').removeClass('active');
		$(this).addClass('active');
		$('.tab-content-item').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).fadeIn();
		return false;
	});

	// collection tab js end---

	// **..product-accordion js start..**
	$('.product-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.product-accordion-item-content').slideUp();
	});
	// **..product-accordion js end..**

	// mobile-dropdown responsive accordion js start--
	$(function () {
		let isMobile = window.matchMedia("only screen and (max-width: 992px)").matches;

		if (isMobile) {
			// **..mobile-dropdown-accordion js start..**
			$('.dropdown-btn').on('click', function () {
				$(this).next(".dropdown-menu").slideToggle();
				$(this).toggleClass('active');
			});

			$('.sub-dropdown-btn').on('click', function () {
				$(this).next(".sub-dropdown-menu").slideToggle();
				$(this).toggleClass('active');
			});
			// **..mobile-dropdown-accordion js end..**
		}
	});
	// mobile-dropdown responsive accordion js end--

})

// showcase-banner slider js start---
var swiper = new Swiper(".showcase-banner-slider", {
	// effect: "fade",
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
});
// showcase-banner slider js end---

// home-banner slider js start----
var swiper = new Swiper(".home-banner-slider-thumb", {
	freeMode: true,
	loop: true,
	spaceBetween: 10,
	slidesPerView: 3,
	watchSlidesProgress: true,
});
var swiper2 = new Swiper(".home-banner-slider", {
	effect: "fade",
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	thumbs: {
		swiper: swiper,
	},
});
// home-banner slider js start----

// btn js ---
// primary btn---
$(function () {
	$('.primary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});

// secondary btn--
$(function () {
	$('.secondary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});
// btn js ---

// modal js start---
var body = document.querySelector("body");
var modal = document.querySelector(".masurement-modal");
var measurement_guide_modal_btn = document.querySelector(".size-guide-open-btn");
var closeButton = document.querySelector(".modal-close-button");

function toggleModal() {
	modal.classList.toggle("show-modal");
	body.classList.toggle("active");
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

measurement_guide_modal_btn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
// modal js end---