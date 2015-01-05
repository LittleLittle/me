var selectMenu=function(i){
  $('#menu-list ul li').removeClass('active');
  $('#menu-list ul li:nth-child('+i+')').addClass('active');
};

$(document).ready(function(){
  $('#menu-list ul li').click(function(){
    selectMenu($(this).index()+1);
  });
});