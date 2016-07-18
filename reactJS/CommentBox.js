var CommentBox=React.createClass({
  render:function(){
    return(
      <div className="commentBox">
      <h1>Comments</h1>
      <CommentList />
      <CommentForm />
      </div>
    );
  }
});

var CommentForm=React.createClass({
  render:function(){
    return(
      <div className="commentForm">
      Hello,This is commentForm.
      </div>
    );
  }
});
var CommentList=React.createClass({
  render:function(){
    return(
      <div className="commentList">
      Hello,This is commentList.
      </div>
    );
  }
});
ReactDOM.render(<CommentBox />,document.getElementById('comment'));
