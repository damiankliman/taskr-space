import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons';

import '../index.css';
import ChatBubble from '../components/ChatBubble';

function TaskSpacePage() {
    return (
        <div className='interfaceWrapper'>
            <div className='titleCard'>
                <div className='listTitle'>Title</div>
                <button className='invite-btn'>
                    <FontAwesomeIcon icon={faUserPlus} style={{color: '#868a92'}} size='lg' />
                </button>
            </div>
            <div className='taskList'>

            </div>
            <div className='chatWindow'>
                <ChatBubble msgStyle='sent' name='Damian' message='I think this is going great!'/>
                <ChatBubble msgStyle='recieved' name='Natalie' message='Your code is spaget' />
                <ChatBubble msgStyle='recieved' name='Natalie' message='Fix this nonsense' />
                <ChatBubble msgStyle='sent' name='Damian' message='I think this is going great!'/>
                <ChatBubble msgStyle='recieved' name='Natalie' message='Your code is spaget' />
                <ChatBubble msgStyle='recieved' name='Natalie' message='Fix this nonsense' />
                <ChatBubble msgStyle='sent' name='Damian' message='I think this is going great!'/>
            </div>    
            <div className='messenger'>
                <input type='text' className='messageInput' placeholder='Type a message...' />
                <button className='messageSend-btn'>
                    <FontAwesomeIcon icon={faComments} style={{color:'#000'}} size='lg' />
                </button>
            </div>
            
        </div>
    );
}

export default TaskSpacePage;