

$('.list').click(function (e) {
    openTab(e.target.dataset.id)
});

$(".tab_button").click(function (e) {
    openTab(e.target.dataset.id)
    $(location).attr("href", "#")
})



function openTab(i) {
    $('.tab_button').removeClass('active');
    $('.tab_content').removeClass('show');
    $('.tab_button').eq(i).addClass('active');
    $('.tab_content').eq(i).addClass('show');
}


$('.menu_btn').click(function(){
    if(!false){
        $('.pay_btn').fadeToggle('play');
    }
})


// $('.btn1').click(function(){
//     $.ajax({
//         type: "get",
//         url : "/jumun.html",
//         data : "",
//         dataType : "html"
        
//     })
// })
