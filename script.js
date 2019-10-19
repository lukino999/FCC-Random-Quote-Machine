$(document).ready(ready());


function ready() {
	console.clear();
	console.log('Document ready');
	getQuote();
}


function getQuote() {
	console.log('Getting quote...');
	
	const url='https://api.quotable.io/random';
	jQuery.get(url,null,function(data, textStatus, jqXHR) {
		console.log('...success function');
		console.log(data);
		console.log(textStatus);
		console.log(jqXHR);

		// update html
		$('#text').html(data.content);
		$('#author').html(data.author);

		// update tweet anchor
		$('#tweet-quote').attr("href", `https://twitter.com/intent/tweet?text=${data.content} - ${data.author}`);
	});
}

function newButtonClick() {
	getQuote();
}