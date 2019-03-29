import React from 'react';
import Home from './home.js';
import Comments from './comments.js';
let divStyle={
  backgroundColor:"grey",
  textAlign:"center",
  float:"left",
  width:"200px",
  height:"400px",
  margin:"20px"
  
}
                   class PostItem extends React.Component{

                                constructor(props){

                                super(props);
                                this.state={
                                              comments:[],
                                              commentvalue:false
                                           };

                                                  }

 
        render(){

            return(

              <div>

                      {/*Display data passed from map function in home*/}

                <div key={this.props.details.id} style={divStyle}>
            
                
                     <p>{this.props.details.title}</p>

                     <p>{this.props.details.body}</p>
                           {/*Only displaying delete for user with id=1*/}

                     {this.props.details.userId===1? <button onClick={this.props.deleteInfo} id={this.props.details.id} >DELETE</button>:null }

                    <br/>
                          {/* Displaying viewcomments for user with id=1*/}
           
                    {this.props.details.userId===1?<button onClick={this.props.viewcomments} id={this.props.details.id}>VIEW COMMENTS</button>:null}
           <br/>

              
             
          </div>
        </div>

      );
  }

}


export default PostItem;