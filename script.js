$(document).ready(function () {
    var turn = 1;
    $("#turn").text("PLAYER 1 STARTS THE GAME");
    $(".btn1").click(function () {  
        if(turn === 1){
            $("#turn").text("PLAYER 2 TURN!");
            $(this).text("X");
            $(this).css("font-size", "20px");
            turn = 2;
        }  else {
            $("#turn").text("PLAYER 1 TURN!");
            $(this).text("O");
            $(this).css("font-size", "20px");
            turn = 1;
        }

        
        
    });

    // $(".btn1").dblclick(function(){
    //     $(this).text("O");
    // })

    $(".btn2").click(function(){
        $(".btn1").empty();
    })
});