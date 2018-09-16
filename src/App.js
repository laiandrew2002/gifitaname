import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import GifList from './components/giflist';
import InputSeach from './components/inputsearch';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gifmaker :[]
    }
    this.total = 0;
  }

  gifinput =(e) =>{
    const baseurl = 'https://api.giphy.com/v1/gifs/';
    const api = 'dRVPNPTe8GzxIDZeBLbbmJkuMpiuFBk9'
    // console.log(e.target.value)

    const inputstring = e.target.value.split(' ').join('+');

      this.total++;
      var keypressed  =this.total;
      setTimeout(()=>{
        
          console.log(keypressed, this.total)
          if(this.total === keypressed){
            // console.log("you are done cb")
            const url = baseurl + "search?q="+ inputstring +"&api_key=" + api + "&limit=12"
            fetch(url)
            .then(response => response.json())
            .then(data => this.setState( {gifmaker : data.data})) 
          }
          // else{
          //   console.log("not done")
          // }
      },500)
  }

  render() {
    // console.log(this.state.gifmaker)
    // const list = this.state.gifmaker.map((e,i) => {
    //   console.log(e);
    //   return (
    //   <iframe src={`https://giphy.com/embed/${e.id}`} width="{e.images.original.width}" height="{e.images.original.height}" 
    //   frameBorder="0" class="giphy-embed" allowFullScreen title="search-gif"></iframe>);
    // });

    return (
      <div>
      <Navbar />
        <div className="container mt-5 ">
          <div className="text-center">
            {/* <div className="input-group-prepend">
              <input className ="form-control" 
              placeholder="Enter Gif" 
              onChange={this.gifinput}/>
              <br /> */}
              <InputSeach search={this.gifinput}/>
            </div>
            <div className='text-center'>

            <GifList gifmaker={this.state.gifmaker} />
            </div>
              
          
        </div>
      </div>
    );
  }
}

export default App;
