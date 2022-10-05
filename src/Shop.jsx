import { Component } from "react";
import { Button , Card } from "react-bootstrap"

export class Shop extends Component{
    
    constructor(){
        super();
    }
    render(){

        let { proInfo } = this.props;

        return(
                <Card style={{ width: '18rem' }} className="m-2">
                    <Card.Img variant="top" src={proInfo?.imgSrc} style={{ height: '40vh' }}/>
                    <Card.Body>
                        <Card.Title> {proInfo?.proName} </Card.Title>
                        <Button variant="primary">Buy Now</Button>
                    </Card.Body>
                </Card>                
        );
    }
}