import React from 'react';


class NewProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      requested : false,
      name:"",
      desc:"",
      price:""
    };
  }

  nameChangeHandler(event){
      console.log("$$$$$$ "+event.target.value);
      this.setState({name:event.target.value});

  }

  descChangeHandler(event){
      console.log("******** "+event.target.value);
      this.setState({desc:event.target.value});

  }

  priceChangeHandler(event){
      console.log("@@@@@@@@ "+event.target.value);
      this.setState({price:event.target.value});

  }

  submit(){
    console.log("WIOW SUBMIT", this.state);

    var data = { "name": this.state.name,
                 "description": this.state.desc,
                 "price": this.state.price
                };

    var request = new XMLHttpRequest();

    var componentThis = this;

    request.addEventListener("load", function(){
      console.log("DONE");
      const responseData = JSON.parse( this.responseText );
      console.log( responseData );
      componentThis.props.addNewProduct( responseData );
      alert("WOW DONE WITYH CREATING THING");


    });
    request.open("POST", '/newproduct');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));

    this.setState({requested:true});

  }

  render() {
    console.log("RENDERRRRR:", this.state);



    if( this.state.requested === false ){
        return (
          <div>
            <div>
                name:
                <input onChange={(event)=>{this.nameChangeHandler(event)}}/>
            </div>
            <div>
                price:
                <input onChange={(event)=>{this.priceChangeHandler(event)}}/>
            </div>
            <div>
                description:
                <input onChange={(event)=>{this.descChangeHandler(event)}}/>
            </div>

            <button className={"btn btn-primary"} onClick={(event)=>{this.submit(event);}}>create product</button>
          </div>
        );



    }else{
        return <div>REQUEST IN PROCESS</div>;
    }

  }
}

export default NewProduct;