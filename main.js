/*
* EntryPoint
* */

function loadImage(canvasId, src) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const image = new Image();
  image.src = src || 'https://www.motoplanete.com/yamaha/zoom-700px/yamaha-XJ6-n-2016-700px.jpg';
  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
  };
  return image;
}

function rotate(canvasId, image, right = true) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');
  const degree = Math.PI / 2;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  context.translate(canvas.width / 2, canvas.height / 2);
  context.rotate(right ? degree : -degree);
  context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
  context.translate(-canvas.width / 2, -canvas.height / 2);
  context.save();
}

function contentLoaderListener() {
  const leftButton = document.querySelector('#left_btn');
  const rightButton = document.querySelector('#right_btn');
  const canvasId = 'my_canvas';
  const image = loadImage(canvasId);
  rightButton.addEventListener(
    'click',
    () => rotate(canvasId, image),
    false,
  );
  leftButton.addEventListener(
    'click',
    () => rotate(canvasId, image, false),
    false,
  );
}

window.addEventListener('DOMContentLoaded', contentLoaderListener);
