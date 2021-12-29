import './NewSpace.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function NewSpacePage() {
    return ( 
    <div className='content-wrapper'>
        <div className='welcome-title'>Let's make a list.</div>
        <div className='user-input-wrapper'>
            <input
                type='text'
                className='user-input'
                placeholder='Your Name'>
            </input>
            <input
                type='text'
                className='user-input'
                placeholder='List Title'>
            </input>
            <button className='btn__next--circle'>
                <FontAwesomeIcon icon={faArrowRight} style={{color: '#FFF'}} size='lg' />
            </button>
        </div>
    </div>
    );
}

export default NewSpacePage;