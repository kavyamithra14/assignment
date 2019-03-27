import React from 'react';
import Home from './home.js';
let divStyle={
  backgroundColor:"grey",
  textAlign:"center",
  float:"left",
  width:"200px",
  height:"400px",
  margin:"20px"
  
}


const renderButton=(id,props)=> {
	console.log(props);
	console.log(id);
	
    if(id === 1) {
      return (
      	<div>
          <button onClick={props.deleteInfo} id={props.details.id} >DELETE</button>
          </div>
      );
    } 
}







const PostItem = (props) => {


	return(

		<div>
			{console.log(props)}

			<div key={props.details.id} style={divStyle}>
            
                
	            <p>{props.details.title}</p>
	            <p>{props.details.body}</p>
	          
	         
	          <p> {renderButton(props.details.userId,props)}</p>

	            
	           
        	</div>
        </div>

	);
	
}
export default PostItem;