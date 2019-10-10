window.addEventListener('DOMContentLoaded', function () {

    const leftButton = document.querySelector('#left_btn');
    const rightButton = document.querySelector('#right_btn');
	const canvas = document.getElementById('my_canvas');
    const context = canvas.getContext("2d");

    const image = loadImage(canvas, context);

    rightButton.addEventListener('click',
        () => rotate(context, canvas, image),
        false);

    leftButton.addEventListener('click',
        () => rotate(context, canvas, image, false),
        false);

});


function loadImage(canvas, context, src='https://www.motoplanete.com/yamaha/zoom-700px/yamaha-XJ6-n-2016-700px.jpg') {
    let image = new Image();
	image.src = src;

    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);
    };
    return image
}


function rotate(context, canvas, image, right=true) {

    const degree = Math.PI / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.translate(canvas.width/2, canvas.height/2);
    context.rotate(right ? degree : -degree);

    context.drawImage(image, -image.width/2, -image.height/2, image.width, image.height);

    context.translate(-canvas.width/2, -canvas.height/2);
    context.save();
}
