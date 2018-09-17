import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const GifCard = ({id, width, height}) =>{

    const copiedurl = `https://i.giphy.com/media/${id}/giphy.gif`;
    //let copied = false;
        return (
            <div className='bg-dark dib br3 pa3 ma2 grow bw2 shadow-5'>
                <iframe src={`https://giphy.com/embed/${id}`} 
                    width="{width}" 
                    height="{height}" 
                    frameBorder="0" 
                    class="giphy-embed" 
                    allowFullScreen title="search-gif">

                </iframe>
                <div className = "text-center mt-2">
                    <CopyToClipboard text={copiedurl}>
                    <a className ="f6 link dim br2 grow ph3 pv2 mb2 dib white bg-dark-blue" 
                    href="#0">Copy Link</a>
                    </CopyToClipboard>
                </div>
            </div>
        )
}

export default GifCard;