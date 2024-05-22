  // Show the first tab by default
  $('.tabs-stage-code div').hide();
  $('.tabs-stage-code div:first').show();
  $('.tabs-nav-code li:first').addClass('tab-active-code');

  // Change tab class and display content
  $('.tabs-nav a').on('click', function(event){
    event.preventDefault();
    $('.tabs-nav-code li').removeClass('tab-active-code');
    $(this).parent().addClass('tab-active-code');
    $('.tabs-stage-code div').hide();
    $($(this).attr('href')).show();
  });