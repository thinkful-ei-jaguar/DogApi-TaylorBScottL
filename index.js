'use strict';

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
        displayAllThePuppies(responseJson))
    .catch(error => alert('Something went wrong. Try again later'));
}

function displayAllThePuppies (responseJson) {
    let imgArr = responseJson.message;
     $('.results').empty();
    imgArr.forEach(img => {
    
      $('.results').append(`<img src="${img}" class ="result-img">`);
    });

    $('.results').removeClass('hidden');
    
    console.log(responseJson);
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