import React, { Component } from 'react';

let pStyle = {
  fontSize: '15px',
  textAlign: 'center',
  color:'#00a3cc'
};

let divStyle={
  backgroundColor:"grey",
  textAlign:"center",
  float:"left",
  width:"200px",
  height:"400px",
  margin:"20px"
  
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[],
     
    };
  }
  
buttonClick=()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        let info=data.map((item)=>{

if(item.userId===1){
   return (

            
              <div key={item.id} style={divStyle}>
              <p style={pStyle}>{item.id}</p>
                <p>{item.userId}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>

              </div>
            

            )      
}  
       })
        
        this.setState({data:info});

      })

       .catch(error=>console.log("error",error));


}


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        let info=data.map((item)=>{

if(item.id!=1){
   return (

            
              <div key={item.id} style={divStyle}>
              <p style={pStyle}>{item.id}</p>
                <p>{item.userId}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>

              </div>
            

            )      
}  
       })
        
        this.setState({data:info});

      })

       .catch(error=>console.log("error",error));

  }

  render() {
    
    return (
      <div>
      <h1>ALL POSTS</h1>
      <button type="submit" onClick={this.buttonClick}>MYPOSTS</button>
      {this.state.data}
      
      </div>
    );
  }
}

export default App;












  