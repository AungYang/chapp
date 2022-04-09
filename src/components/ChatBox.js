import React from "react";
import { Row, Col } from "antd";
import Message from "./Message";


class ChatBox extends React.Component{
    render(){
        return(
            <div className="chatbox" >

            <Row>
                <Col span={18} offset={3}>
                Aung: hello
                

                </Col>
            </Row>
            <Row>
                <Col span={18} offset={3}>
                Dave: hi
                

                </Col>
            </Row>


        
            
            </div>
        );
    }
}


export default ChatBox;