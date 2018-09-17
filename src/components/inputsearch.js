import React from 'react';

const InputSearch = ({search}) =>{
        return (
            <div className="input-group-prepend">
                <input className ="form-control" 
                placeholder="Enter Anything" 
                onChange={search}/>
              <br />
            </div>
        )
}

export default InputSearch;