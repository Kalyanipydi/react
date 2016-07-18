var TodoApp=React.createClass({
getInitialState:function() {
  return {items:[]};
},
updateItems:function(newItem){
  var allItems=this.state.items.concat([newItem]);
  this.setState({items:allItems});
},
render:function() {
  return(
    <div>
    <TodoBanner />
    <TodoList items={this.state.items} />
    <TodoForm onFormSubmit={this.updateItems} />
    </div>
  );

}
});

var TodoBanner=React.createClass({
render:function(){
  return(

    <h3>TODO</h3>
  );
}
});

var TodoList=React.createClass({

});

var TodoListItem=React.createClass({

});

var TodoForm=React.createClass({

});
ReactDom.render(<TodoApp />,document.getElementById('todolist'));
