import React, { Component } from 'react';
import PostItem from './postItem.js';
import NewPost from './newPost.js';
import Comments from './comments.js';

let pStyle = {
    fontSize: '15px',
    textAlign: 'center',
    color: '#00a3cc'
};

let divStyle = {
    backgroundColor: "grey",
    textAlign: "center",
    float: "left",
    width: "200px",
    height: "400px",
    margin: "20px"

}

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            buttonVisible:false,
            newPostVisible:false,
            comments:[]

        };
    }

    buttonClick = () => {
       this.setState({ newPostVisible:true});
      this.setState({buttonVisible:true});
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                 this.setState({ data:data});
               
            })

            .catch(error => console.log("error", error));


    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ data:data});

            })
            .catch(error => console.log("error", error));

    }

onDelete=(e)=>{
  let array=this.state.data;
  console.log(array);
  var deleteid=e.target.id;
  console.log(deleteid);
  var newarray=array.filter((del)=>
{

  if(del.id==deleteid)
  {
    return(del.id===deleteid);
  }
  else
  {
    return(del.id!==deleteid);
  }
  
  
  

});
  console.log(newarray);
  this.setState({data: newarray});
  
   //const newarray=array.find((id)
        //array.id!==id;
   //);
    
   //console.log(newarray);
}




    render() {

        return (
            <div>
                 <h1>ALL POSTS</h1>
                
                        {this.state.data.map((item)=>{
                              return <PostItem details={item} deleteInfo={this.onDelete} />     
                         })}

                           <button type="submit" onClick={this.buttonClick} >MYPOSTS</button>
                           

                        {(this.state.newPostVisible===true?<NewPost/>:null)} 
                           
                            
           </div>
        );
    }
}

export default Home;