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

class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[],
     
    };
  }
  
buttonClick=(i)=>{

//}fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
     //} .then(response => response.json())
      //}.then(data =>{
       //} console.log(data);
        //}let info=data.filter((item)=>{
//}if(item.id!==i){

  //} return (

            
             //} <div key={item.id} style={divStyle}>
          
              
               //} <p>title:{item.title}</p>
               //} <p>body:{item.body}</p>
             //} </div>
            

           //} ) 
           //} } 
             //}this.setState({data:info});    
      //} })
        
       

     //} })

      //} .catch(error=>console.log("error",error));
   let userdata=this.state.data;
   //const result=userdata.filter((i.id)=>{
   //return (i.id!== userdata.id);
 //});
 console.log("hello");

   let result = userdata.filter((i)=> {
 return (i.id!== userdata.id);
});
console.log(result);
return (

            
              <div key={userdata.id} style={divStyle}>
          
              
                <p>title:{userdata.title}</p>
                <p>body:{userdata.body}</p>
              </div>
            

        ) 
     

}


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => response.json())
      .then(data =>{
        
        let info=data.map((item)=>{
          
            let postid= item.id;
          this.state.data=item;
          
   return (
             
                <div key={item.id} style={divStyle}>
            

                <p>{item.title}</p>
              
                <p>{item.body}</p>
                 <button onClick={this.buttonClick(item)}>DELETE</button> 
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
     
     
      {this.state.data}
      
      </div>
    );
  }
}

export default Delete;












  