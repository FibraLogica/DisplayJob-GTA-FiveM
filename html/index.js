// JavaScript Document

window.addEventListener('message', function (event) {
    switch (event.data.action) {
        case 'tick':
            if (event.data.show) {
                $('.container').hide();
            } else {
                $('.container').show();
            }
            $(".health-bar").css("width", event.data.health + "%");
            $(".shield-bar").css("width", event.data.armor + "%");
            $(".stamina-bar").css("width", event.data.stamina + "%");
            $(".oxigen-bar").css("width", event.data.air + "%");
            $(".id").html(event.data.source);
            $("#time").html(event.data.time);
            break

        case 'jobset':
                $('.job-name').html(event.data.jobname);
                $('.job-rank').html(event.data.jobrank);
             break

        case 'showui':
                $('body').show();
             break
        case 'hideui':
                $('body').hide();
             break  }})


$(function(){

        if (Configs.Pos !== "custom") {
            switch (Configs.Pos) {
                case 'top-left':
                    $(".container").css("top", "5px");
                    $(".container").css("left", "5px");
                break
                case 'top-right':
                    $(".container").css("top", "5px");
                    $(".container").css("right", "5px");
                break
                case 'bottom-right':
                    $(".container").css("right", "5px");
                    $(".container").css("bottom", "5px");
                break

                case 'bottom-left':
                    $(".container").css("left", "1.5%");
                    $(".container").css("bottom", "2.5%");
                break

                case 'next-to-map':
                    $(".container").css("left", "325px");
                    $(".container").css("bottom", "16px");
                break
					default:
                    $(".container").css("top", "5px");
                    $(".container").css("left", "5px"); 
            }
        }

})

$(function(){

  if (Configs.Col !== "custom") { 
      switch (Configs.Col) {
        case 'blue':
         $(".job-name").css("color", "#00BFFF");
        break
        case 'red':
         $(".job-name").css("color", "#FF0000");
        break
        case 'orange':
         $(".job-name").css("color", "#FF8000");
        break
        case 'yellow':
         $(".job-name").css("color", "#FFFF00");
        break
        }
       }
})