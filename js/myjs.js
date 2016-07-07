$(function() {
var zerno = [
        { name: "Зерно", adress: "Незалежнасцi, 46", time: "9&sdot;&sdot;&sdot;23"}       
    ];
    
    $('#infoforsingle').tmpl(zerno).appendTo('#singlerow');

var data = [     
        { img:"img/guru.jpg", name: "Guru Coffee Club", adress: "Завулак Мiхайлаўскi, 4", time: "10&sdot;&sdot;&sdot;23"},
        { img:"img/coffeemall.jpg", name: "CoffeeMall", adress: "Раманаўская слабада, 7", time: "9&sdot;&sdot;&sdot;23"}    
    ];
    
    $('#CoffeeTmpl').tmpl(data).appendTo('#firstrow');

     var data = [
        { img:"img/coffeemall.jpg", name: "CoffeeMall", adress: "Раманаўская слабада, 7", time: "9&sdot;&sdot;&sdot;23"},
        { img:"img/ps.jpg", name: "Пряности & Сладости", adress: "Маскоўская, 12", time: "9&sdot;&sdot;&sdot;21"},
        { img:"img//wakeup.jpg", name: "Wake Up Coffee", adress: "Веры Харужай, 5", time: "10&sdot;&sdot;&sdot;23"},
        { img:"img/jam.jpg", name: "Jam", adress: "Леншіградская, 2", time: "9&sdot;&sdot;&sdot;23", level:4},
        { img:"img/mokoloko.jpg", name: "Моколоко", adress: "Якуба Коласа, 37", time: "10&sdot;&sdot;&sdot;23"},
        { img:"img/guru.jpg", name: "Guru Coffee Club", adress: "Завулак Мiхайлаўскi, 4", time: "10&sdot;&sdot;&sdot;23"},
        { img:"img/coffeemall.jpg", name: "CoffeeMall", adress: "Раманаўская слабада, 7", time: "9&sdot;&sdot;&sdot;23"},
        { img:"img/ps.jpg", name: "Пряности & Сладости", adress: "Маскоўская, 12", time: "9&sdot;&sdot;&sdot;21"},
        { img:"img//wakeup.jpg", name: "Wake Up Coffee", adress: "Веры Харужай, 5", time: "10&sdot;&sdot;&sdot;23"}      

    ];

var templResult = $('#CoffeeTmpl3').tmpl(data);
    templResult.slice(0).appendTo("#secondrowColumn");
    templResult.slice(1).appendTo("#secondrowColumn2");
    templResult.slice(2, 4).appendTo("#secondrow");
    templResult.slice(5).appendTo("#thirdrow");

    $('#searchBack').hide();
    $("#Close").hide();

$("#SearchRight").on("click",function(){
$("#SearchRight").hide();

    $("#searchBack").show();
    $("#Close").show();
    });

$("#Close").on("click",function(){
  $("#searchBack").hide();
    $("#Close").hide();
    $("#SearchRight").show();
    });  



$("#ResetMobile").hide();
$("#SearchMobile").on("click",function(){
$("#SearchMobile").hide();
$("#ResetMobile").show();
    });


$("#ResetMobile").on("click",function(){
$("#ResetMobile").hide();
$("#SearchMobile").show();  
 
    });

$("#searchBack").on("blur",function(){
    $("#searchBack").hide();
    $("#Close").hide();
    $("#SearchRight").show();
});

var SortCoffeeLast = [

{ name:"Эспрэса"},
{ name:"Рыстрэта"},
{ name:"Лунга"},
{ name:"Амерыкана"},
{ name:"Флэт Вайт"},
{ name:"Капучына"},
{ name:"Мак'та"},
{ name:"Латэ"},
{ name:"Па-венску"},
{ name:"Латэ Мак'ята"},
{ name:"Айрыш"},
{ name:"Раф кава"},
{ name:"Глясэ"},
{ name:"Мока"}
];
   
   $('#CoffeeNameList ').tmpl(SortCoffeeLast).appendTo('#CoffeeName'); 
   $('#CoffeeNameList ').tmpl(SortCoffeeLast).appendTo('#CoffeeNameMobile'); 

$("#Blur").css("opacity","0.5");
$("#Blur").on("click", function(){
   $("#Blur").css("opacity","1");   
   $("#HiddenCheck").css("opacity","1")
});

 $("#HiddenCheck").on("click", function(){
   $("#HiddenCheck > span").hide();
    $("#Blur").css("opacity","0.5") 
});

var City = [
            { value: "У Мiнску", label: "Мiнск" },
            
            { value: "У Гомелi", label: "Гомель" },
            { value: "У Магiлёве", label: "Магiлёу"}
        ];
$('#CityList').tmpl(City).appendTo('#CityName'); 
$('#CityList').tmpl(City).appendTo('#CityNameMobile'); 

$(".selectpicker visible-sm visible-xs").selectpicker('setStyle', 'span.bs-caret', 'remove');



   });



