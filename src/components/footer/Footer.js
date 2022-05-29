import React from 'react';
import './footer.scss'

function Footer(props) {
    return (
        <div className='footer-div'>
           contact us via <span><a className='footer-email' href="mailto:yagmurbaran@windowslive.com"> yagmurbaran@windowslive.com</a></span>   <br/> <br/>
           Copyright © Myth Game Studio
        </div>
    );
}

export default Footer;