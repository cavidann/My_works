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

        if (i == 1) {
            $(".kvadrat").css({
                "display": "none"
            })
            i = 0;
        } else {
            $(".kvadrat").css({
                "display": "block"
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

    });
      $('.daire').click(function(){
       $('html, body').animate({ scrollTop: 0 }, "slow")
       return false;
   })

adultDentist=[
//Monday
	[	//Hekim.........//Bashlama vaxti .................//Bitme vaxti
		["Eric Synder",
		new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 12:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"],		
		["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Tuesday
	[
		["Carolyn  Hunt",new Date("April 18, 2017 08:00:00"),new Date("April 18, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg",
		"Dental Hygineist"]			
	],
//Wednesday
	[
		["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
	],
//THursday
	[
		["Carolyn  Hunt",new Date("April 20, 2017 11:00:00"),new Date("April 20, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg",
		"Dental Hygineist"]			
		
	],
//Friday

	[
		["Eric Synder",new Date("April 21, 2017 08:00:00"),new Date("April 21, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
		["Christina Holland",new Date("April 21, 2017 14:00:00"),new Date("April 21, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Saturday
	[
		["Carolyn  Hunt",new Date("April 22, 2017 09:00:00"), new Date("April 22, 2017 14:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg",
		"Dental Hygineist"]	
	],
//Sunday
	[
		["Eric Synder",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]			
	]

]

dentist=[
//Monday
	[	//Hekim.........//Bashlama vaxti .................//Bitme vaxti
		["Eric Synder",
		new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 12:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"],		
		["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Tuesday
	[
				
	],
//Wednesday
	[
		["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
	],
//THursday
	[
		["Carolyn  Hunt",new Date("April 20, 2017 11:00:00"),new Date("April 20, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg",
		"Dental Hygineist"]			
		
	],
//Friday

	[
		["Eric Synder",new Date("April 21, 2017 08:00:00"),new Date("April 21, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
		["Christina Holland",new Date("April 21, 2017 14:00:00"),new Date("April 21, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Saturday
	[
		
	],
//Sunday
	[
		["Eric Synder",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]			
	]


]

dentalHygienist=[
//Monday
	[	//Hekim.........//Bashlama vaxti .................//Bitme vaxti
		["Eric Synder",
		new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"],		
		["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Tuesday
	[		
	],
//Wednesday
	[
		["Eric Synder",new Date("April 19, 2017 08:00:00"),new Date("April 19, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
	],
//THursday
	[
			
		
	],
//Friday

	[		
		["Christina Holland",new Date("April 21, 2017 14:00:00"),new Date("April 21, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Saturday
	[
			
	],
//Sunday
	[
					
	]

]

cosmeticDentist=[
//Monday
	[	//Hekim.........//Bashlama vaxti .................//Bitme vaxti
		["Eric Synder",
		new Date("April 17, 2017 08:00:00"),new Date("April 17, 2017 12:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"],		
		["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Tuesday
	[
					
	],
//Wednesday
	[
		["Eric Synder",new Date("April 19, 2017 13:00:00"),new Date("April 19, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
	],
//THursday
	[
		["Carolyn  Hunt",new Date("April 20, 2017 11:00:00"),new Date("April 20, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-carolyn-50x50.jpg",
		"Dental Hygineist"]			
		
	],
//Friday

	[
		["Eric Synder",new Date("April 21, 2017 08:00:00"),new Date("April 21, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
		["Christina Holland",new Date("April 21, 2017 14:00:00"),new Date("April 21, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Saturday
	[
		
	],
//Sunday
	[
		["Eric Synder",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]			
	]

]

pediatricDentist=[
//Monday
	[	//Hekim.........//Bashlama vaxti .................//Bitme vaxti
			
		["Christina Holland",new Date("April 17, 2017 13:00:00"),new Date("April 17, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Tuesday
	[
				
	],
//Wednesday
	[
				
	],
//THursday
	[
				
		
	],
//Friday

	[
		["Eric Synder",new Date("April 21, 2017 08:00:00"),new Date("April 21, 2017 13:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]	,		
		["Christina Holland",new Date("April 21, 2017 14:00:00"),new Date("April 21, 2017 18:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-cristina-50x50.jpg",
		"Pediatric Dentist"]			
	],
//Saturday
	[
		
	],
//Sunday
	[
		["Eric Synder",new Date("April 23, 2017 10:00:00"),new Date("April 23, 2017 15:00:00"),
		"https://livedemo00.template-help.com/wt_61219/images/users/user-eric-50x50.jpg",
		"Dentist"]			
	]

]

////////////////////////////////////////////////////////////////////////////////

doctors=[adultDentist,dentist,dentalHygienist,cosmeticDentist,pediatricDentist]


// Tdleri doldururuq
for(var i=1;i<=10;i++){
	tr=$("#timetable table tbody tr:nth-child("+i+")")
	for(var j=0;j<7;j++){
		$('<td></td>').appendTo(tr);
	}
}

/////////////////////////////////////////////////////////////////////////////

function PlaceTimeTable(index){
	//Birinci tdden bashqa (mes 09:00-10:00) hamisini sil
	$("#timetable table tbody tr td:not(:nth-child(1)").empty()

	//Uygun timetableleri doldurur
	for(var j=0; j<7;j++){
		for(var i=0; i<doctors[index][j].length;i++){		

			//uygun dentisti goturur
			var dentist=doctors[index][j][i];
            if(dentist[0]=="Eric Synder"){
                color="#18afd3";
            }
            else if(dentist[0]=="Christina Holland"){
                color="#f57e57";
            }
            else {
                 color ="blue";
             }
        
			//Uzunlugunu teyin edir
			var lengthOfDiv=dentist[2].getHours()-dentist[1].getHours();
			//Start positionu hesablayir
			var startPosition= dentist[1].getHours()-8;
			//Div yaradir
			$("<div></div>",{
				class: "doctor",
				style: "background: "+color+"; height:"+100*lengthOfDiv+"px",
			}).append(dentist[0]+"<img  class='img-circle img-responsive' src="+dentist[3]+"><p class='job'>"+dentist[4]+"</p>").
			//Buralari zehmet chekib etude  gelerdiz basha dusherdiz niye buna append edirem 
			appendTo($("#timetable table tbody tr:nth-child("+(startPosition+1)+") td:nth-child(+"+(j+2)+")"))

		}
	}
}

$("#timetable ul li").click(function(){
	//Nechenchi tabdi onu tapir
	var index=$("#timetable ul li").index($(this));
	//Hemin tabi uygun fuksiyaya gonderir
	PlaceTimeTable(index)
	$("#timetable ul li").removeClass("active")
	$(this).addClass("active")
	//Eger sehife kichikdise table-i clickden sonraya append edir
	if($(window).width()<600){
		$(this).after($("#timetable #tableScroll"))
	}
})

//Resize olanda ve bashlayanda yoxlayirki accordion yaratmalidi yayox

function CheckForAccordion(){
	if($(window).width()<600){
		// accordion qurulushu yaradir sonrasin ozunuz edersiz
		$('#timetable ul li').css("display",'block')
		//table-i active classdan sonraya append edir
		$('#timetable ul .active').after($("#timetable #tableScroll"))
	}
	else{
		$('#timetable ul li').css("display",'inline-block')
		//Ekrani boyudende table-i yerine getirr
		$('#timetable').append($('#timetable #tableScroll'))

	}
}

$(document).ready(function(){
	PlaceTimeTable(0);
	CheckForAccordion()
})

$(window).resize(function(){
	CheckForAccordion()
})

});
