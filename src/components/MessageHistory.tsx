import React from "react";

enum Types {
    response = 'response',
    message = 'message',
    typing = 'typing'
}

type ListParams = {
    id: string;
    from: {name: string};
    type: Types | string;
    time: string;
    text?: string;
}

type List = {
    list: ListParams[]
}

export function MessageHistory({list}: List) {
    if (list.length !== 0) {
        return (
            <ul>
                {list.map(item => {
                    if (item.type === Types.message) {
                        return <Message key={item.id} item={item} />;
                    }
                    if (item.type === Types.response) {
                        return <Response key={item.id} item={item} />;
                    }
                    if (item.type === Types.typing) {
                        return <Typing key={item.id} item={item} />;
                    }

                    return null;
                })}
            </ul>
        )
    }
    else {
        return null
    }

    function Message({item}: {item: ListParams}) {
        return (
            <li className="clearfix">
                <div className="message-data align-right">
                    <span className="message-data-time">{item.time}</span> &nbsp; &nbsp;
                    <span className="message-data-name">{item.from.name}</span>
                    <i className="fa fa-circle me"> •</i>
                </div>
                <div className="message other-message float-right">{item.text}</div>
            </li>
        )
    }   

    function Response({item}: {item: ListParams}) {
        return (
            <li className="clearfix">
                <div className="message-data align-left">
                    <span className="message-data-time">{item.time}</span> &nbsp; &nbsp;
                    <span className="message-data-name">{item.from.name}</span>
                    <i className="fa fa-circle me"> •</i>
                </div>
                <div className="message my-message float-left">{item.text}</div>
            </li>
        )
    }  

    function Typing({item}: {item: ListParams}) {
        return (
            <li className="clearfix">
                <div className="message-data align-right">
                    <span className="message-data-time">{item.time}</span> &nbsp; &nbsp;
                    <span className="message-data-name">{item.from.name}</span>
                    <i className="fa fa-circle me"> •</i>
                </div>
                <div className="message other-message float-right italic">{item.from.name} набирает сообщение...</div>
            </li>
        )
    }  
}

