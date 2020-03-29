$(document).ready(function(){
    $(".button").click(function(){
        const name = $(this).attr("data-filter");
        if(name === "all"){
            $(".filter").show("2000")
        }
        else{
            $(".filter").not("."+name).hide("1000");
            $(".filter").filter("."+name).show("2000");

        }
    });
    $(".filterBtn a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

});
