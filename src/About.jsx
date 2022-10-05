import { Component } from "react";
import React from "react";
import { MySlider } from "./MySlider";
import { Products } from "./Products";

export default function About() {
    return (
      <div className="bg-about">
        <h1 className="b p-4">E-Commerce</h1> 
        <br></br>
        <h2 className="b">About Us</h2>
        <p className="ab"> E-commerce is the short name for ‘electronic commerce’. It is the buying and selling of goods and services, 
        or the transmitting of funds or data, over an electronic network, primarily the internet. 
        It means business transactions through the internet, telephone, credit card, etc. 
        without the help of cheque or physical payment of money on the part of the buyer. 
        The money is paid by the bank or company. It is the most modern method of transaction and is in practice in 
        the developed countries of the world. E-commerce is in turn driven by the technological advances of the semiconductor 
        industry and is the largest sector of the electronics industry. Any information regarding the price, availability, 
        and quality of the goods is transmitted through the internet and telephone. 
        Thus E-commerce facilitates business transactions without the trouble and risk of carrying money physically.  </p>

        <div className="">
          <img className="img-ab" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiYw0lNjPryXanS_CVcAo_AboRQVJ2nPLyw&usqp=CAU" ></img>
          <img className="img-ab" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2blwtc4Zpm5Omb4XlsE5jsomZ8f6OVly1_Q&usqp=CAU" />
          <img className="img-ab" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToE3ljKgUsiUMoarWMsht2K7B_ts4ummsQWg&usqp=CAU" />
          <img className="img-ab" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0HimD9FBndPbCuP1KlYMB8JfHlFMlkbQSQ&usqp=CAU" />
          <img className="img-ab" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-inVwmWVxareWdBD-9Orq2u4kzRct5fG7g&usqp=CAU" />
          <img className="img-ab" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1-VIhKZfxwlREiKg1CaCQNVf8nHyiKWRSg&usqp=CAU" />
        </div>
      </div>
    );
  }

