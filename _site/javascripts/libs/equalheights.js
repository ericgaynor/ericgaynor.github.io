
$.fn.setAllToMaxHeight = function(){
return this.css({ 'height' : '' }).height( Math.max.apply(this, $.map( this , function(e){ return $(e).height() }) ) );
}