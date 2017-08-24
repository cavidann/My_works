var ary_img=['images/pages/typography-01-770x420.jpg','images/pages/services-01-870x440.jpg','images/pages/services-02-870x440.jpg'];
var ary_headp=["Our entire team is dedicated to providing you with the highest standard of quality dental care services that are tailored to meet the specific needs of every member of your family.","We understand how important it is for your child to have healthy teeth. That’s why our range of services also includes various children’s dentistry services from checkups to restorative care.","Denta-C pursues the goal of caring about the health of your teeth, and we have gathered a qualified team of experts, who are dedicated to the needs of your and your family’s dental care."];
var ary_headh1=["HIGH QUALITY MEDICAL CARE THAT'S FAST AND CONVENIENT","AFFORDABLE PEDIATRIC DENTISTRY SERVICES","WE ARE A TEAM OF QUALIFIED DENTISTS AND NURSES"]
$(document).ready(function() {
   $('.dot').click(function(){
      var x=$(this).attr('index');
      $('.dots div').each(function(){
          $(this).removeClass('active')
      });
      $(this).addClass('active');
      $('.head img').attr('src',ary_img[x]);
      $('.headh1').html(ary_headh1[x]);
      $('.headp').html(ary_headp[x]);
   })

   $('#workbutton1 h4').mouseover(function(){
       $('#figur1').animate({left: '0'},'100')
   })
   $('#workbutton1').mouseout(function(){
       $('#figur1').animate({left: '-12'})
   })

   $('#workbutton2 h4').mouseover(function(){
       $('#figur2').animate({left: '0'},'100')
   })
   $('#workbutton2').mouseout(function(){
       $('#figur2').animate({left: '-12'})
   })

   $('#workbutton3 h4').mouseover(function(){
       $('#figur3').animate({left: '0'},'100')
   })
   $('#workbutton3').mouseout(function(){
       $('#figur3').animate({left: '-12'})
   })


   $('.dot1').click(function(){
      var y=$(this).attr('index');
      $('.dots1 div').each(function(){
          $(this).removeClass('active1')
      });
      $(this).addClass('active1');
      $('.fullsize').animate({left: y*(-100)+'%'});
   })



   $('.dot2').click(function(){
      var y=$(this).attr('index');
      $('.dots2 div').each(function(){
          $(this).removeClass('active2')
      });
      $(this).addClass('active2');
      $('.fullteam').animate({left: y*(-100)+'%'},'slow');
   })

   $('.daire').click(function(){
       $('html, body').animate({ scrollTop: 0 }, "slow")
       return false;
   })
   $(document).ready(function () {
        $('#sidebar-btn').click(function () {
            console.log($('#sidebar').width());
            $('#sidebar-btn').toggleClass('visible1');
            $('#sidebar').toggleClass('visible');
        });





        var accordion = document.querySelector('#sidebar');
        accordion.addEventListener('click', function (event) {
            var item = event.target;
            if (item.nextElementSibling.style.display == 'block') {
                $(".pages").hide();
                $(".galery").hide();
                $(".blog").hide();
            } else {
                $(".pages").hide();
                $(".galery").hide();
                $(".blog").hide();
                item.nextElementSibling.style.display = 'block';
            }
        });
    });
    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        console.log(scroll)
        if (scroll >= 500) {
            $(".daire").css({
                "position": "fixed",
                "bottom": 0,
                "right": 10
            });
        } else {
            $(".daire").css({
                "position": "absolute",
                "right": "10px",
                "bottom": "-500px"
            });
        }
    });
 }); 
 $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1200:{
            items:3
        }
    }
  });
});