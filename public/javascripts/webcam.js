$(function(){

	if (!navigator.webkitGetUserMedia) {
	alert('This browser is not webkit, or does not support getUserMedia');
	}
	
	navigator.webkitGetUserMedia(
		{video: true},
  
	  	function(localMediaStream) {
	    	// when success
	    	var inputVideo = document.getElementById('inputVideo');
	    	inputVideo.src= window.URL.createObjectURL(localMediaStream);
	    	inputVideo.play();
	  	},
	  
	  	function(err) {
	    	// when failed
	    	alert('could not get any signal by video tag');
	    	console.log(err);
	  	}
	);


})