import React, { Component } from 'react';

let pStyle = {
  fontSize: '15px',
  textAlign: 'center',
  color:'#00a3cc'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[],
     
    };
  }
  


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        let info=data.map((item)=>{
          return (
              <div key={item.id}>
              <p style={pStyle}>{item.id}</p>
                <p>{item.userId}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>

              </div>

            )
        
       })
        
        this.setState({data:info});

      })

       .catch(error=>console.log("error",error));

  }

  render() {
    
    return (
      <div>
      <h1>ALL POSTS</h1>
      {this.state.data}
      
      </div>
    );
  }
}

export default App;












  