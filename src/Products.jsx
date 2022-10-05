import { Component } from "react";
import { MyCard } from "./MyCard";

export class Products extends Component{

    products = [
        { productName:"Phones" , imgSrc:"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { productName:"Laptops" , imgSrc:"https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { productName:"Cars" , imgSrc:"https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=400" },
        { productName:"Electric Machines" , imgSrc:"https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ]

    render(){
        return(
            <div className="container ">

                <div className="row g-3 p-3 ">
                    {this.products.map((product) => {
                        return <MyCard productInfo={product}></MyCard>;
                    })
                    }
                </div>   
            </div>
        );
    }
}