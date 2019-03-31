import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.js';

/* On myposts button click displaying new post table*/
class NewPost extends React.Component{


postAdd=(props)=>{
	  props.visibility=true;

	var title=this.refs.title.value;
	var body=this.refs.body.value;

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      userId:1,
      title: title,
      body: body
      
    })
   
  })
  .then(response => response.json())
  .then(json => {console.log(json);
  	 alert("successfully created");



  }
     

  	)

   .catch(error => console.log("error", error));


}




	render(){
		return(

<div>
				<h3>ADD NEW POST</h3>
				<input type="text" ref="title" name="txttitle"placeholder="enter title"/>
				<input type="text" ref="body"name="txtbody" placeholder="enter details"/>
				<button type="submit" onClick={this.postAdd} >Add Post</button>



	</div>





			);

	}
}
export default NewPost;







