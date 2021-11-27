function ChatBubble (props) {
    const sentMessage = {
        background: 'rgba(28, 202, 255, 0.3)',
        alignSelf: 'flex-end'
    }

    const gotMessage = {
        background: 'rgba(194, 194, 194, 0.3)'
    }

    function styleHandler(style) {
        if (style === 'recieved') {
            return gotMessage;
        } else {
            return sentMessage;
        }
    }
    
    return (
        <div className='bubble' style={styleHandler(props.msgStyle)}>
            {props.name}: {props.message}
        </div>
    );
}

export default ChatBubble;