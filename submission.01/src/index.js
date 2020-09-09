/*
        jangan ubah kode di bawah ini ya!
*/

import "regenerator-runtime";
import 'bootstrap';
import 'jquery';
import 'slick-carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'
import "./styles/main.css";
import main from "./scripts/controller/main";
import './scripts/view/headerbar.js';
import './scripts/view/footbar.js';

main();

/*$(window).on('load', function() { // makes sure the whole site is loaded 
	/*var status = $('#status');
	var preloader = $('#preloader');
	var body = $('body');
	status.fadeOut(); // will first fade out the loading animation 
	preloader.delay(0).fadeOut('fast'); // will fade out the white DIV that covers the website. 
	body.delay(0).css({'overflow':'visible'});
	var vidDefer = document.getElementsByTagName('iframe');
	for (var i=0; i<vidDefer.length; i++) {
		if(vidDefer[i].getAttribute('data-src')) {
			vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
		} 
	}



	return null;
})*/

$(function(){
    'use strict';
    //const windowWidth = $(window).width();
    const tabsClick = $('.tabs .tab-links a, .tab-links-2 a, .tab-links-3 a');
	//const multiItem = $('.slick-multiItem');
	const multiItem2 = $('.slick-multiItem2');
	tabsClick.on('click', function(e)  {
		const currentAttrValue = $(this).attr('href');
		const tabsCurrent = $('.tabs ' + currentAttrValue);
		// Show/Hide Tabs
		tabsCurrent.show().siblings().hide();
		// Change/remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
		//reset position for tabs
		//multiItem.slick('setPosition');
		multiItem2.slick('setPosition');
	});

    /*multiItem2.slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: false,
		// autoplay: true ,
		// autoplaySpeed: 2000,
		dots: true,
		responsive: [{
			breakpoint: 1200,
			settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
	    }, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
	    }]
	});*/

    const singleItem = $('.slider-single-item');
	singleItem.slick({
	        infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		// autoplay: true,
		// autoplaySpeed: 2000,
		dots: true,
		draggable:true,
		responsive: [{
	                breakpoint: 1024,
	                settings: {
	                        slidesToShow: 1,
	                        slidesToScroll: 1,
	                        infinite: true,
	                        dots: true,
	                        arrows: true
	                }
	        }, {
	                breakpoint: 768,
	                settings: {
	                        slidesToShow: 1,
	                        slidesToScroll: 1
	                }
	        }, {
	                breakpoint: 480,
	                settings: {
	                        slidesToShow: 1,
	                        slidesToScroll: 1,
	                        arrows: false,
	                }
	        }]
	});
});