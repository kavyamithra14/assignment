import React, { Component } from 'react';
import PostItem from './postItem.js';
import NewPost from './newPost.js';
import Comments from './comments.js';



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
                buttonVisible:false,  {/* Setting button for my posts only*/}
                newPostVisible:false, {/* On myposts button click display add new post*/}
                commentvalue:false,   {/*on view comments button click comments component appear*/}
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
               
                           }
                  )

            .catch(error => console.log("error", error));


                         }



    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')

            .then(response => response.json())
            .then(data => {

                console.log(data);
                this.setState({ data:data});

                          }

                  )
            .catch(error => console.log("error", error));

                          }


                        {/*Delete function */}


      onDelete=(e)=>{
              let array=this.state.data;
              console.log(array);
              var deleteid=e.target.id;
              console.log(deleteid);
                   {/* filtering data that is not deleteid         */}
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
  
  
  

                }
                                         );
                  console.log(newarray);
                  this.setState({data: newarray});
  
   
                  }



                          {/* View comments function  */}



          commentsinfo=(e)=>{
                      console.log("hai");

                      this.setState((prevValue, props) => {

                      return {commentvalue:true}
                                                          }

                                    );
                    {/*fetching all comments*/}
                    fetch('https://jsonplaceholder.typicode.com/comments?postid='+e.target.id)

                          .then(response => response.json())
                          .then(data => {console.log(data);

                           this.setState({comments:data});

                                        }
                                )

                          .catch(error => console.log("error", error));

                          console.log(this.state.comments);
                          var check=this.state.comments;
                          console.log(check);
                          var commentid=e.target.id;
                          console.log(commentid);{/*clicked post id*/}
                          console.log("hello");
  
                  var newarray=check.find((comments)=>
                                      {

                          console.log('post id'+comments.postId);
                          console.log('comen'+commentid);
                          console.log(check);
                          if(comments.postId===commentid)
                          console.log("insided loop");

                                      }

                                        )
 
                          this.setState({comments: newarray});
  
                              }

    
    render() {

        return (
            <div>
                 <h1>ALL POSTS</h1>
                
                        {this.state.data.map((item)=>{
                             

                              return <PostItem details={item} deleteInfo={this.onDelete}  viewcomments={this.commentsinfo}/>     
                         })}

                           <button type="submit" onClick={this.buttonClick} >MYPOSTS</button>

                        {(this.state.newPostVisible===true?<NewPost/>:null)} 
                        {(this.state.commentvalue===true?<Comments name={this.state.comments}/>:null)}
                        
           </div>
        );
    }
}

export default Home;