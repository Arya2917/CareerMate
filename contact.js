$('#send').click(function(){
  $('div:nth-child(2)').addClass('sending');
  var name = $('#name').val();
  $('#envelope').append('<p class="callback">Thanks<br>' + name + '!</p>');
})