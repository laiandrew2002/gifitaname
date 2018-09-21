
import React from 'react';
import GifCard from './gifcard';

const GifList = ({gifmaker}) =>{
        return (
            <div>{
                gifmaker.map((e,i) => {
                //console.log(e);
                    return (
                        <GifCard 
                            key={e.id}
                            id={e.id}
                            width={e.images.original.width}
                            height={e.images.original.height}
                        />
                    );
                })
            }</div>    
        )
}

export default GifList;