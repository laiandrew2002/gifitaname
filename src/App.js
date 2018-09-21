import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import GifList from './components/giflist';
import InputSeach from './components/inputsearch';
import Loading from './components/loading'

class App extends Component {
  constructor(){
    super();
    this.state = {
      gifmaker :[],
      trending :[]
    }
    this.total = 0;
  }

  componentDidMount(){
    const baseurl = 'https://api.giphy.com/v1/gifs/trending?';
    const api = 'dRVPNPTe8GzxIDZeBLbbmJkuMpiuFBk9'
    const url = baseurl + "api_key=" + api + "&limit=12"

    fetch(url)
    .then(response => response.json())
    .then(data => this.setState( {trending : data.data}))
  }

  gifinput =(e) =>{
    const baseurl = 'https://api.giphy.com/v1/gifs/';
    const api = 'dRVPNPTe8GzxIDZeBLbbmJkuMpiuFBk9'
    // console.log(e.target.value)

    const inputstring = e.target.value.split(' ').join('+');
      this.total++;
      var keypressed  =this.total;
      setTimeout(()=>{
         //console.log(keypressed, this.total)
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

  toggleList(){
    if(this.state.trending.length === 0){
      return(
        <Loading />
      )
    }
    else if (this.state.gifmaker.length===0 && this.state.trending.length>0){
      
      return(
        <GifList gifmaker={this.state.trending} />
      );
    }else {
      return(
        <GifList gifmaker={this.state.gifmaker} />
      );
    }
  }

  render() {
    
    console.log(this.state.trending)
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
              {this.toggleList()}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
