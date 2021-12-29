import './TaskSpace.css';

import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

import ChatBubble from '../components/ChatBubble';
import Tasks from '../components/Tasks';

function TaskSpacePage() {
    const [tasks, setTasks] = useState(
        //for testing only - to be integrated with database
        [
            {
                id: 1,
                title: 'some title',
                text: 'some test task',
                complete: false,
            },
            {
                id: 2,
                title: 'some other task',
                text: 'more test text',
                complete: true,
            }
        ]
    )

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) => 
                task.id === id ? { ...task, complete: !task.complete } : task
            )
        )
    }

    const toggleDelete = (id) => {
        setTasks(
            tasks.filter((task) => task.id !== id)
        )
    }

    return (
        <div className='interface-wrapper'>
            <div className='header'>
                <div className='title'>Title</div>
                <button className='btn--circle'>
                    <FontAwesomeIcon icon={faUserPlus} style={{color: '#868a92'}} size='lg' />
                </button>
            </div>
            <div className='task-list'>
                <Tasks tasks={tasks} onToggle={toggleComplete} onDelete={toggleDelete} />
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