var list = [];
var mainComp;
var Omdbserverapp=React.createClass({

  getInitialState: function() {

    return {
      data1: [],
      input:''
    };
  },

  handleChange: function(e) {

   this.setState({input: e.target.value});
  },
    render: function() {
    return (<div>
      <div id="form1">
      <form   className="form-inline" >
        <input type="text" className="form-control"  placeholder="Enter Movie Name"  required={true} value={this.state.input} onChange={this.handleChange}   />

        <button  id="search" type="button" className="btn btn-success" onClick={this.handleClick}>Search Movies<span className='glyphicon glyphicon-search'></span></button>

      </form>
      </div>
    <MovieList />
      </div>

    );
  },
  handleClick: function() {

    console.log("Movie: " + this.state.input);

     var url="http://www.omdbapi.com/?s="+this.state.input+"&y=&plot=short&r=json";


    $.ajax({
      url:url,
      dataType:'json',
      cache:false,
      success:function(data){
        //console.log(data.Search[0]);
       list=this.state.data1;

       data.Search.map(function(d){
        // console.log(d);
          list.push(d);
       })
        this.setState({data1:list,input:''});
        //console.log(a.Search);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

},


});

var MovieList=React.createClass({

  // handleView:function() {
  //     console.log("view");
  //   return(<div>
  //
  //   );
  // },

  handleModify:function() {
      console.log("modify");
    return(
      <div className="modal fade"  id="modify" tabIndex="-1" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">Modal title</h4>
                    </div>
                <div className="modal-body">
                    <p>One fine body&hellip;</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

                  </div>
              </div>
              </div>
          </div>
    );
  },

  handleDelete:function() {
    console.log("delete");
    return(
      <div className="modal fade" id="delete" tabIndex="-1" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">Modal title</h4>
                    </div>
                <div className="modal-body">
                    <p>One fine body&hellip;</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

                  </div>
              </div>
              </div>
          </div>
    );
  },


render :function(){
var s=this;
  var count=0;
  return(<div>{
      list.map(function(d){
        //console.log(d);
        return(<div className="well row" key={count++}>
                    <div className='col-lg-3'>
                              <img id="imgs" src={d.Poster} />
                    </div>
                    <div className='col-lg-9'>
                            <h1>Title   :{d.Title}</h1>
                            <h3>Year    :{d.Year}</h3>
                         <button className="btn btn-info modelbtn"  data-toggle="modal" data-target="#view">View Details</button>
                          <button className="btn btn-warning modelbtn" onClick={s.handleModify} data-toggle="modal" target="#modify" >Modify Details</button>
                          <button className="btn btn-danger modelbtn" onClick={s.handleDelete} data-toggle="modal" target="#delete">Delete Movie</button>
                          <div className="modal fade" id="view" tabIndex="-1" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                            <h4 className="modal-title">Movie title</h4>
                                        </div>
                                    <div className="modal-body">
                                        <p>One fine body&hellip;</p>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

                                      </div>
                                  </div>
                                  </div>
                              </div>
                    </div>
              </div>
            )
      })
  }</div>


  );

}


});



// url="/api/comments" pollInterval={2000}

ReactDOM.render(
  <Omdbserverapp  />,
  document.getElementById('omdbapp')
);
