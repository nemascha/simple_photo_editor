window.addEventListener('DOMContentLoaded', function () {
	
	const container = document.querySelector('#general_container'),
		  leftButton = document.querySelector('#left_btn'),
		  rightButton = document.querySelector('#right_btn'),
		  cropper = document.querySelector('#cropper');
		  
	const canvas = document.getElementById('my_canvas'),
		  context = canvas.getContext("2d"),
		  canvas1 = document.getElementById('my_canvas_1'),
		  context1 = canvas1.getContext("2d");
	
	let image = new Image();
		image.src = 'https://www.motoplanete.com/yamaha/zoom-700px/yamaha-XJ6-n-2016-700px.jpg';
		
		image.onload = () => {
	        canvas.width = image.width;
	        canvas.height = image.height;
	     
	        context.drawImage(image, 0, 0, image.width, image.height);
      	};

  //     	function cropImage () {
  //     		context1.beginPath();
	 //        context1.strokeStyle="blue";
	 //        context1.fillRect(20,20,150,100);
	 //        context1.stroke();
		// }


      	let degree = Math.PI / 2;

		rightButton.addEventListener('click', function () {
				
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.save();
			context.translate(canvas.width/2, canvas.height/2); 			
			context.rotate(degree);		

	    	context.drawImage(image, -image.width/2, -image.height/2, image.width, image.height);
	       		
	    	context.translate(-canvas.width/2, -canvas.height/2);

	    	context.save();
		}, false);

		leftButton.addEventListener('click', function () {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.save();
			context.translate(canvas.width/2, canvas.height/2); 			
			context.rotate(-degree);		

	    	context.drawImage(image, -image.width/2, -image.height/2, image.width, image.height);
	       		
	    	context.translate(-canvas.width/2, -canvas.height/2);
       		context.save();
		}, false);
	
})