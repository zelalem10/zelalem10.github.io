$(document).ready(function () {
    var opacity;
    const interval = (width, growthRate, interv) => {
        setInterval(() => {
          console.log(interv);
      
          $(".circle > span").css("width", function (idx, old) {
            return parseInt(old) + parseInt(growthRate) + "px";
          });
          $(".circle > span").css("height", function (idx, old) {
            return parseInt(old) + parseInt(growthRate) + "px";
          });
        }, interv);
      };



 function eventHandler() {
        let time;
        $(".circle > span").hover(function () {
            debugger;
                if (!opacity) {
                    opacity = 1;
                }
                time = setInterval(opaque, 250, this, opacity)
            },
            function () {
                $(this).css("opacity", "1");
                clearInterval(time);
            });

        $(".circle > span").click(function () {
            $(this).hide()
        });
    }
  
  $("#start").click(() => {
      $(".circle").show();
    let width = $("#width").val();
    let growthRate = $("#gAmount").val();
    let interv = $("#interval").val();
     let numberOfCircle = $('#noCircle').val();
    $(".circle > span").css("width", width);
    $(".circle > span").css("height", width);
    interval(width, growthRate, interv);
   
        for (let i = 0; i < numberOfCircle; i++) {
            createCircle(width, i * 100);
        }
        $("#circle").css("margin", "auto");
        eventHandler();
  });
  

  function createCircle(width, pos) {
    width += "px";
    $(".circle")
        .append(
            $("<span>", {
                "css": {
                    "width": width,
                    "height": width,
                    "background-color": `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
                    "border-radius": "50%",
                    "margin": "auto",
                    "text-align": "center",
                    "position": "absolute",
                    "margin-top": "15%",
                    "left": Math.floor(Math.random() * screen.width) + "px",
                }
            }
            ).attr('class', 'circ')
        );
}

function opaque(arg, opacity) {
    opacity -= 0.5;
    $(arg).css("opacity", opacity)
}
 
});


