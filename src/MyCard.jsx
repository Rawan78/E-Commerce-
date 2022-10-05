import { Component } from "react";
import { Button , Card } from "react-bootstrap"
import { Shopping } from "./Shopping";

export class MyCard extends Component{
    
    constructor(){
        super();
    }
    render(){
        let { productInfo } = this.props;
        

        return(
            <Card style={{ width: '18rem' }} className="m-3">
                <Card.Img variant="top" src={productInfo?.imgSrc}  style={{ height: '10rem' }}/>
                <Card.Body>
                    <Card.Title> {productInfo?.productName} </Card.Title>
                    <a href="/Shopping"> <Button variant="primary">  Show Products </Button> </a> 
                </Card.Body>
            </Card>
        );
    }
}