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
