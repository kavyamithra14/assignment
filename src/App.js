import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  render() {
    const { hits } = this.state;

    return (
      <div>
      
      {hits.map(hit =>
           id={hit.id}
            
         
    )}
      
      </div>
    );
  }
}

export default App;












  