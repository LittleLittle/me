var selectMenu=function(i){
  $('#menu-list ul li').removeClass('active');
  $('#menu-list ul li:nth-child('+i+')').addClass('active');
};

$(document).ready(function(){
  $('#menu-list ul li').click(function(){
    selectMenu($(this).index()+1);
  });
});

$(document).scroll(function(){
  if($(document).scrollTop()>196){
    $('#menu-list').addClass('title-list-float');
    $('#splitter').addClass('splitter-float');
  }else{
    $('#menu-list').removeClass('title-list-float');
    $('#splitter').removeClass('splitter-float');
  }
});