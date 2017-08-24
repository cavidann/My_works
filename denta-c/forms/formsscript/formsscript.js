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
    $(".a").click(function(){
    if ((".first_form .input:first-child").value != "" && (".first_form .input:last-child").value != "") {
      $(".text").html("Please enter e-mail").css({"color":"red"})
    }
    })
});
var app = angular.module("login", []);

app.directive('passwordValidate', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {

                scope.pwdValidLength = (viewValue && viewValue.length >= 8 ? 'valid' : undefined);
                scope.pwdHasLetter = (viewValue && /[A-z]/.test(viewValue)) ? 'valid' : undefined;
                scope.pwdHasNumber = (viewValue && /\d/.test(viewValue)) ? 'valid' : undefined;

                if(scope.pwdValidLength && scope.pwdHasLetter && scope.pwdHasNumber) {
                    ctrl.$setValidity('pwd', true);
                    return viewValue;
                } else {
                    ctrl.$setValidity('pwd', false);                    
                    return undefined;
                }

            });
        }
    };

   
});

var btn=document.getElementById("btn")
document.getElementById("btn").addEventListener("click", function () {
    if (input.value == "") {
        document.getElementById("name").innerText="The text field is required.1";
        document.getElementById("name").style.color="red";
         document.getElementById("input").style.border="1px solid red";
        console.log("Tesekkurler");
    }else{
         document.getElementById("name").innerText="";
    }
    if (input1.value == "") {
        document.getElementById("surname").innerText="The text field is required.2";
        document.getElementById("surname").style.color="red";
          document.getElementById("input1").style.border="1px solid red";
        console.log("Tesekkurler");
    }else{
         document.getElementById("surname").innerText="";
    }
    if (input2.value == "") {
        document.getElementById("phone").innerText="The text field is required.3";
        document.getElementById("phone").style.color="red";
          document.getElementById("input2").style.border="1px solid red";
        console.log("Tesekkurler");
    }else{
         document.getElementById("phone").innerText="";
    }
    if (input3.value == "") {
        document.getElementById("message").innerText="The text field is required.4";
        document.getElementById("message").style.color="red";
          document.getElementById("input3").style.border="1px solid red";
        console.log("Tesekkurler");
    }else{
         document.getElementById("message").innerText="";
    }
   var input4= document.getElementById("inputEmail");
    if (input4.value == "") {
        document.getElementById("email").innerText="The text field is required.5";
        document.getElementById("email").style.color="red";
          document.getElementById("inputEmail").style.border="1px solid red";
        console.log("Tesekkurler");
    }else{
         document.getElementById("email").innerText="";
    }

})
