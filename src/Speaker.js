import React, {useRef, useContext} from 'react';
import { ConfigContext } from './App.js';

const Speaker = ({primaryImg, secondaryImg}) =>  {
    const imageRef = useRef(null);
    const context = useContext(ConfigContext);
    console.log(context.doAThing);

    return (<div style={{width: '25%'}}>
        <div className="card">
        <img
            className="card-img-top"
                        onMouseOver={() => {
                            imageRef.current.src = secondaryImg;
                        }}
                         onMouseOut={() => {
                            imageRef.current.src = primaryImg;
           }}
                        src={primaryImg}
                        ref={imageRef}
                    alt="Sam Burnside"/>
      <div className="card-body">
        <h5 className="card-title">Sam Burnside</h5>
        <p className="card-text">This is Samuel Burnside, he is very dangerous.</p>
        <a href="#" className="btn btn-primary">Hire Him</a>
      </div>
    </div>

            </div>);
}

export default Speaker;