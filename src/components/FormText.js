import React, { useState } from 'react'


export default function FormText(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
       
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        
    }
    const [text, setText] = useState('');

    return (
        <>
         <div className="container" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" value = {text} onChange={handleOnChange} 
            style={{backgroundColor: props.mode=== 'dark'?'#242352':'white',color: props.mode=== 'dark'?'white':'#042743'}} id="myForm" rows="8"></textarea>
            </div>
            <button className="btn primary text-light bg-dark mx-1 my-1" onClick = {handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn primary text-light bg-dark mx-1 my-1" onClick = {handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color: props.mode=== 'dark'?'white':'#042743'}} >
            <h2>Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length }  words and {text.length} characters</p>
            <p>Requires {0.008 * text.split(" ").length} minutes to read.</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
       
    )
}
