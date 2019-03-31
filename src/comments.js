import React from 'react';
import Home from './home.js';
import PostItem from './postItem.js';

/*  On view comments button click,data received is displayed in Comments component*/



const fulldata=(props)=>{
console.log(props);
if(props.length()>0){

console.log("props inside function",props);

}

else
{
	console.log("no value");
}

/*return item.map((comments)=>
{

	return comments.name[0];
}


	)*/


}




const Comments=(props)=>{
	
return(
	<div>

		{console.log('inside comment component', props)}
		<p>{fulldata()} </p>
		
	</div>

	);

}
export default Comments;