import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function NewSpacePage() {
    return ( 
    <div className='welcomeWrapper'>
        <div className='welcomeTitle'>Let's make a list.</div>
        <div className='userInput'>
            <input
                type='text'
                className='nameInput startInput'
                placeholder='Your Name'>
            </input>
            <input
                type='text'
                className='titleInput startInput'
                placeholder='List Title'>
            </input>
            <button className='go-btn'>
                <FontAwesomeIcon icon={faArrowRight} style={{color: '#FFF'}} size='lg' />
            </button>
        </div>
    </div>
    );
}

export default NewSpacePage;