
// $(document).ready(function() {
//     $("h2").hover(function() {
//         $(this).siblings("h3").addClass("nav-content");
//     }, function() {
//         $(this).siblings("h3").removeClass("nav-content");
//     });
// });


$(document).ready(function() {
    $("h2").hover(function() {
        $(this).siblings("h3").addClass("showmenu"); //for 3 seconds etc
    }, function() {                                         //get rid of?
        $(this).siblings("h3").removeClass("showmenu");  //get rid off?
    });
});
