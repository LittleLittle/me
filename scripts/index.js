var selectMenu=function(i){
  $('#menu-list ul li').removeClass('active');
  $('#menu-list ul li:nth-child('+i+')').addClass('active');
};

// Index from 0.
// If the offset is between the ith section and (i+1)th section, it returns |i+1|.
// If the offset is less than the 1st section, it returns 0;
var getSelectionIndex=function(){
  var offset=$(document).scrollTop();
  if(offset<document.getElementById(anchorElementIds[1]))
    return 0;
  for(var i=1;(i<anchorElementIds.length)&&(offset>document.getElementById(anchorElementIds[i]).offsetTop);i++){
  }
  return i+1;
}

$(document).ready(function(){
  $('#menu-list ul li').click(function(){
    selectMenu($(this).index()+1);
  });
});

var anchorElementIds=['content-skills','content-education','content-publications','content-experiences','content-contact-me'];

var lastOffset=0;
var lastSelectionIndex=0;

var getSelectionIndex=function(){
  var offset=$(document).scrollTop();
  if(offset<document.getElementById(anchorElementIds[0]).offsetTop)
    return 0;
  for(var i=1;(i<anchorElementIds.length)&&(offset>=document.getElementById(anchorElementIds[i]).offsetTop);i++){
  }
  return i;
}

var scrollMenu=function(){
  var offset=$(document).scrollTop();
  var section=getSelectionIndex();
  if(section==lastSelectionIndex){
    lastOffset=offset;
    return;
  }
  if(offset>lastOffset){  // scroll down
    selectMenu(getSelectionIndex());
  }
  else{  // scroll up
    selectMenu(getSelectionIndex()+1);
  }
  lastSelectionIndex=section;
  lastOffset=offset;
}

$(document).scroll(function(){
  if($(document).scrollTop()>196){
    $('#menu-list').addClass('title-list-float');
    $('#splitter').addClass('splitter-float');
  }else{
    $('#menu-list').removeClass('title-list-float');
    $('#splitter').removeClass('splitter-float');
  }

  scrollMenu();
});