import './TaskSpace.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

import ChatBubble from '../components/ChatBubble';

function TaskSpacePage() {
    return (
        <div className='interface-wrapper'>
            <div className='header'>
                <div className='title'>Title</div>
                <button className='btn--circle'>
                    <FontAwesomeIcon icon={faUserPlus} style={{color: '#868a92'}} size='lg' />
                </button>
            </div>
            <div className='task-list'>

            </div>
            <div className='chat-list'>
                <ChatBubble msgStyle='sent' name='Damian' message='I think this is going great!'/>
                <ChatBubble msgStyle='recieved' name='Natalie' message='Your code is spaget' />
                <ChatBubble msgStyle='recieved' name='Natalie' message='Fix this nonsense' />
                <ChatBubble msgStyle='sent' name='Damian' message='I think this is going great!'/>
                <ChatBubble msgStyle='recieved' name='Natalie' message='Your code is spaget' />
                <ChatBubble msgStyle='recieved' name='Natalie' message='Fix this nonsense' />
                <ChatBubble msgStyle='sent' name='Damian' message='I think this is going great!'/>
            </div>    
            <div className='footer'>
                <input type='text' className='input--rounded' placeholder='Type a message...' />
                <button className='btn__send--rounded'>
                    <FontAwesomeIcon icon={faComments} style={{color:'#000'}} size='lg' />
                </button>
            </div>
            
        </div>
    );
}

export default TaskSpacePage;