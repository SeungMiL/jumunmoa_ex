

$('.list').click(function(e){ 
    openTab(e.target.dataset.id)
  });

  $(".tab_button").click(function(e){ 
        openTab(e.target.dataset.id)
        $(location).attr("href", "#")
    })



  function openTab(i){
    $('.tab_button').removeClass('active'); 
    $('.tab_content').removeClass('show'); 
    $('.tab_button').eq(i).addClass('active'); 
    $('.tab_content').eq(i).addClass('show'); 
  }

