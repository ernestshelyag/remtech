$(function(){particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#0990bb"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#0990bb",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#fff",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}}),$(".hero-slider").slick({dots:!0,autoplay:!0}),$('input[name*="phone"]').inputmask({mask:"+7(999)999-99-99",showMaskOnHover:!1}),$(window).scroll(function(){$(window).scrollTop()+$(window).height()>=$(document).height()?$(".footer-eq__eq-img").addClass("active"):$(".footer-eq__eq-img").removeClass("active"),$(window).scrollTop()+$(window).height()>=$(document).height()-$(".footer").height()-10?$(".footer").addClass("active"):$(".footer").removeClass("active")}),setInterval(function(){var e=Math.floor(4*Math.random()),o=[$("#it1"),$("#it2"),$("#it3"),$("#it4")][e];$(o).toggleClass("active")},2500)});