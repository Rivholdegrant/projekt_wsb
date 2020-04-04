$(function(){
  const BASE_URL = 'http://localhost/public/';
  $('#send-button').on('click', (event) => {
    event.preventDefault();
    $.ajax({
      url: BASE_URL + 'send.php?email=' + $('#email').val() + '&debug=' + $('#debug').val(),
	  type:'POST',
      data: {
        'email': $('#email').val(),
        'rss': $('#rss').val()
      }
    }).done((data) => {
      $('#response').text(data);
    }).fail(() => {
      alert( "error" );
    });
  });

  $('#get-button').on('click', (event) => {
    event.preventDefault();
    $.ajax({
      url: BASE_URL + 'get.php?email=' + $('#email').val(),
    }).done((data) => {  
		let reponse = JSON.parse(data);		
		var formatedList = separete(reponse[0]);
	  $('#rsslist').val(formatedList);	  
	  $('#debug').val(generateMail(reponse[0]));
    }).fail(() => {
      alert( "error" );
    });
  });
  
  $('#save-button').on('click', (event) => {
    event.preventDefault();
    $.ajax({
      url: BASE_URL + 'save.php',
	  type:'POST',
      data: {
        'email': $('#email').val(),
        'rss': $('#rss').val()
      }
    }).done((data) => {
      $('#response').text(data);
    }).fail(() => {
      alert( "error" );
    });
  });

});


function separete(str)
{
	return str.replace(/:s:/g, "\n\r");
}

function generateMail(str)
{	
	return "This is your email:<br>"+str.replace(/:s:/g, "<br>");
}
function stringToArray(str)
{
	return str.split(":s:");
}
function parseRSS(rssItem)
{	
	
	return temp;
}





















