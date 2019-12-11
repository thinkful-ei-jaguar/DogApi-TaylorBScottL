'use strict';

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}



function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let desiredNumber = $('.numberBar').val();
    getDogImage(desiredNumber);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});