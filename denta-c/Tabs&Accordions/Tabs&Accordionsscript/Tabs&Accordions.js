$(document).ready(function () {
      $(".fornumber").click(function(){
        $(".fornumber i").toggleClass("fa-ellipsis-v");
       $(".fornumber i").toggleClass("fa-times");
        
    })
 $(".search").click(function () {
    $(".input").toggle();
    $(".nav-pills").toggle();
    })
        $(".fa-times").click(function () {
    $(".input").toggle();
    $(".nav-pills").toggle();
    })


   
    var i = 1;
    $(".fornumber").click(function () {
        
        if (i == 1){
            $(".kvadrat").css({
                "display": "block"
            })
            i = 0;
        }else{
             $(".kvadrat").css({
                "display": "none"
            })
            i = 1;
        }
        console.log(i)
    })
    $(document).ready(function () {
 $('.sidebar-btn').click(function () {
             $(".sidebar-btn span").toggle();
            $(".fa-arrow-left").toggle()
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
        if (scroll >= 118) {
            $(".menu").css({
                "position": "fixed",
                "top": 0,
                "left": 0,
                "width": "100vw"
            });

        } else {
            $(".menu").css({
                "position": "static",
                "width": "inherit"
            });

        }
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
       $('.daire').click(function(){
       $('html, body').animate({ scrollTop: 0 }, "slow")
       return false;
   })
    });
    // accardion
    $(document).ready(function() {
  $("#accordion section h1").click(function(e) {
    $(this).parents().siblings("section").addClass("ac_hidden");
    $(this).parents("section").removeClass("ac_hidden");

    e.preventDefault();
  });
});
  $(document).ready(function() {
  $("#accordion1 section h1").click(function(e) {
    $(this).parents().siblings("section").addClass("ac_hidden");
    $(this).parents("section").removeClass("ac_hidden");

    e.preventDefault();
  });
});
var accordion = document.querySelector('.item');
var b=document.getElementById("b");

$(".head").click(function(){
    
      // $(".body").toggle();
        $(this).find("i").toggleClass("fa-minus");
    var item = event.target;
    var parent = item.parentNode.parentNode;
item.nextElementSibling.style.transition = "all 0.5s";
    if (item.nextElementSibling.style.maxHeight) {
        item.nextElementSibling.style.maxHeight =null;   
        
    } else {
         for (var i = 0; i < parent.childElementCount; i++) {
            parent.children[i].children[1].style.maxHeight = null; 
             $(".head").not($(this)).find("i").removeClass("fa-minus").addClass("fa-plus");    
        }
          
                $(".fa-minus").css({"display":"inline-block"})
        item.nextElementSibling.style.maxHeight = 200+"px";
    }
 
});
});
