
var data=[
    {first:'kalyani',last:'pydi'},
    {first:'Bhavani',last:'pydi'},
    {first:'Ravi',last:'pydi'},
    {first:'Suguna',last:'pydi'}
];


var PersonApp=React.createClass({
  render:function(){
    return (
      <div>
      <h1>This is PersonApp</h1>
      <PersonList data={this.props.data} />
      </div>
    )
  }
});
var Person=React.createClass({
render:function(){
return (
  <div>
  <h2>{this.props.last} {this.props.first}</h2>
  </div>
)
}
});

var PersonList=React.createClass({
render:function(){
var people=this.props.data.map(function(person){
return <Person first={person.first} last={person.last}  />
});
return(
<div>{people}</div>
)

}

});


ReactDOM.render(<PersonApp data={data}/>,document.getElementById('divContainer'));
