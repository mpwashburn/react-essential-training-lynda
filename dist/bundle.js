'use strict';

//Everything below is converted to
// JSX is Javascript XML and is a tag based syntax that we can use to create React elements
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
  'h1',
  { id: 'title',
    className: 'header',
    style: { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana' } },
  'Hello World'
), document.getElementById('react-container'));

//*************************************************************
// //ES6 destructuring to make code cleaner

// const { createElement } = React
// const { render } = ReactDOM

// const style = { //style object
//     backgroundColor: 'orange',
//     color: 'white',
//     fontFamily: 'verdana'
// }

// //This is a React element
// //from ES6 destructuring, we removed React from React.createElement
// const title = createElement (
//     'h1', //Arg 1: what we are creating
//     {id: 'title', className: 'header', style: style}, //Arg 2: properties this element should have
//     'Hello World' //Arg 3: child content the element should have
//   )

// // How to render the element created above. R
// //from ES6 destructuring, we removed ReactDOM from ReactDOM.render
// ReactDOM.render( //ReactDOM.render takes two arugments
//     title, //Arg 1: Name of element to render
//     document.getElementById('react-container') //Arg 2: location to render element. In this case we are mounting to react container
//   )

//Refactoring using ES6 destructuring
