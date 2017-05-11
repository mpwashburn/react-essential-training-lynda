//Everything below is converted to
// JSX is Javascript XML and is a tag based syntax that we can use to create React elements
const { render } = ReactDOM

render(
  <h1 id='title'
    className='header'
    style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
  Hello World
  </h1>,
  document.getElementById('react-container')
)
