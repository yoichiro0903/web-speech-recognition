$(function(){



	
	//track the face in video
	var videoInput = document.getElementById('inputVideo');
	var ctracker = new clm.tracker();
	ctracker.init(pModel);
	ctracker.start(videoInput);

	function positionLoop() {
	    requestAnimationFrame(positionLoop);
	    var positions = ctracker.getCurrentPosition();
	    // positions = [[x_0, y_0], [x_1,y_1], ... ]
	    // do something with the positions ...
	}
  	
  	positionLoop();


  	//draw to canvas
  	var canvasInput = document.getElementById('drawCanvas');
  	var cc = canvasInput.getContext('2d');
  	console.log(canvasInput.width);
  	function drawLoop() {
    	requestAnimationFrame(drawLoop);
    	cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
    	ctracker.draw(canvasInput);
  	}
  	drawLoop();
				// var videoInput = document.getElementById('inputVideo');
        
    //     var ctracker = new clm.tracker();
    //     ctracker.init(pModel);
    //     ctracker.start(videoInput);
				
				// function positionLoop() {
    //       requestAnimationFrame(positionLoop);
    //       var positions = ctracker.getCurrentPosition();
    //       // do something with the positions ...
    //       // print the positions
    //       var positionString = "";
    //       if (positions) {
    //         for (var p = 0;p < 10;p++) {
    //           positionString += "featurepoint "+p+" : ["+positions[p][0].toFixed(2)+","+positions[p][1].toFixed(2)+"]<br/>";
    //         }
    //        // document.getElementById('positions').innerHTML = positionString;
    //       }
    //     }
    //     positionLoop();
				
				// var canvasInput = document.getElementById('drawCanvas');
				// var cc = canvasInput.getContext('2d');
				// function drawLoop() {
    //       requestAnimationFrame(drawLoop);
    //       cc.clearRect(0, 0, canvasInput.width, canvasInput.height);
    //       ctracker.draw(canvasInput);
    //     }
    //     drawLoop();

});