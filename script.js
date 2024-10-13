document.addEventListener("DOMContentLoaded", function() {  
    document.querySelector(".button1").addEventListener("click", function (){
        document.querySelector(".pop-up1").style.display = "block"; 
        document.querySelector(".container").style.cssText = "opacity: 0.4; pointer-events: none;";
    });
    document.querySelector(".button2").addEventListener("click", function (){
        document.querySelector(".pop-up2").style.display = "block";
        document.querySelector(".container").style.cssText = "opacity: 0.4; pointer-events: none;";
    });
    document.querySelector(".button3").addEventListener("click", function (){
        document.querySelector(".pop-up3").style.display = "block";
        document.querySelector(".container").style.cssText = "opacity: 0.4; pointer-events: none;";
    });

});

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) { // 27 - Escape
        document.querySelectorAll(".pop-up1, .pop-up2, .pop-up3").forEach(element => {
            element.style.display = 'none';
        });
        document.querySelector(".container").style.cssText = "opacity: 1; pointer-events: all;";
    }    
});

