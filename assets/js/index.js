$(function() {
  translate('zh');
});


function translate(lang) {
  var language;
  $.getJSON('../../translate/'+lang+'.json', function(test) {
    language = JSON.stringify(test);
    language = JSON.parse(language);
    $('.translation').each(function(index,element){
      var element = $(this);
      if( element.is('input') || element.is('textarea')) {
          $(this).attr("placeholder",language[$(this).attr('key')]);
        } else {
          $(this).text(language[$(this).attr('key')]);
        }
    });
  });
}
