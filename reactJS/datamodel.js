var data=[
  {id:1,author:'Peter Hunt',text:"This is one comment"},
  {id:2,author:'Jordar Walke',text:'This is another comment'}
];
var Comment=React.createClass({
  render:function(){
    return(
      <div>
      <h2>{this.props.author},{this.props.id},{this.props.text}</h2>
       </div>
    );
  }
});

var CommentList=React.createClass({
  render:function(){

var commentNodes=this.props.data.map(function(comment){
  console.log(comment.author);
  return(

    <Comment author={comment.author}  id={comment.id}  text={comment.text} key={comment.id}>
    {comment.text}
    </Comment>
  );
});
return(
  <div className="CommentList" >
  {commentNodes}
  </div>
);
  }
});


var CommentBox=React.createClass({
render:function(){
  return (
    <div className="commentBox">
    <h1>Comments</h1>
    <CommentList data={this.props.data} />

    </div>
  );
}

});

ReactDOM.render(<CommentBox data={data} /> ,document.getElementById('datamodel'));
