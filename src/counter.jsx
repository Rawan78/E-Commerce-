import React from "react";
import { useState } from "react";


export default function Counter(){
    let [sectionTitle,setSectionTitle]= useState("Counter Section ");
    let[count, setCount]= useState(0)
    let[show,setShow] =useState(false);

    let increase=() => {
        setCount(count+1);
    };

    let decrease=() => {
        if(count!=0){
        setCount(count -1);
            
        }
        else{
            setShow(true)
        }
    };
    let changeTittle=() => {
        setSectionTitle("New section")
    }
    
    
        return(
        <div className="alert alert-secondary p-5 mb-5 text-center"> 
        <h2 className="text-primary">{sectionTitle}</h2>
        <p className="fs-4 text-danger"> Count is : {count}</p>
        {false &&(
        <p className="fs-5 text-primary"> Can't decrease count less than Zero</p>)}
        <button className="btn btn-success mx-3" onClick={changeTittle}> Change Tittle</button>
        <button className="btn btn-danger mx-3" onClick={increase}>Increse Count</button>
        <button className="btn btn-primary mx-3" onClick={decrease}> Decrease Count</button>


        </div>
    );


        }