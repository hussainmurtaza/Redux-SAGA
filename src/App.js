import ReactDOM from 'react-dom';

import React, { Component } from 'react'

class App extends Component {

    state={

    }

     fetchdata = () =>{

    }
    render() {
        return (
            <div>
                <button onClick={this.fetchdata} className="btn btn-primary">Fetch</button>
            </div>
        )
    }
}

export default App
