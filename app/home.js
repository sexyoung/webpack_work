import $ from 'jquery';
import style from './home.scss';
// import img from './cat.jpg';

// function component () {
//   var element = document.createElement('div');
//
//   /* lodash is required for the next line to work */
//   element.innerHTML = _.join(['Hello','webpack'], ' ');
//   return element;
// }
//
// document.body.appendChild(component());
// console.warn('hello', style, img);


$('input:radio').on('click', function(e) {
  // console.info(e);
  console.info($(e.target).val());
});


// console.warn($('#a1').prop('checked')); // DOM
// console.warn($('#a1').attr('checked')); // HTML
