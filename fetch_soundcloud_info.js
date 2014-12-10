$(document).ready(function() {
  
  // Fetch information on click.
  $( "#fetch" ).click(function() {
        
    url = $("input[name='url']").val();
    id = $("input[name='id']").val();
 
    $.get('http://api.soundcloud.com/resolve.json?url='+
      url+'/tracks&client_id='+id, function (result) {
      $('#output').text(JSON.stringify(result, undefined, 2))
    });
  });

});
