class Greeting extends React.Component {
    render() {
        return (<div className="test"><h1>Hello world</h1></div>);
    }
}

ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
);


class Header extends React.Component {

  constructor () {
    super();
    this.state = {
      buttonText : "Click me!"
    }

  }

  pressed () {
    this.setState({
      buttonText : "Clicked!"
    });
  }

  render() {
    return(
      <div>
      <div className="welcome">
          <h1>PEZ ADDICTS</h1>
      </div>
      <div className="topmenu">
        <ul>
          <li onClick={ () => {this.pressed()}}>{this.state.buttonText}</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </div>
      </div>);
  }

}

ReactDOM.render(
  <Header />,
  document.getElementById("header")
)
