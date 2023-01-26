import React, { useState } from 'react'

 
export default function TextForm(props) {
  //to uppercase text
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success");    //for show alert msg nd type when user click on uppercase btn
  } 
  //to lowercase text
  const handleLoClick=()=>{ 
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
  } 
  //to clear text
  const handleClearClick=()=>{
    let newText=" ";
    setText(newText);
    props.showAlert("Text was cleared!","success");
  } 
  //to copy text
  const handleCopy=()=>{ 
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text was copied!","success");
  } 
  //to remove extra spaces
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed!","success");
  } 
  const handleOnChange=(event)=>{
    //  console.log("On change");
    setText(event.target.value)  
  }
  const [text, setText] = useState('');  //text variable/state h aur setText ki help sy ham text ki chnge kr skty means state change kr skty (setText ek function h jis ki madad sy ham state ko update kr skty hain)
  // text="new text";  wrong way to change the state
  // setText("New text");   CORRECT WAY TO CHANGE STATE
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className='mb-3'>{props.heading}</h1>
         <div className="mb-3">  { /* onChange func is lye use kia ku ky is ki help sy text change kr skty hain/text area me type kr skty */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color:props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1"onClick={handleUpClick}>ConverttoUppercase</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1 " onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1 text-light" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h2 className="my-3 color-white">Your Text Summary:</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview:</h2>
      <p>{text.length>0?text:"Nothing To Preview"}</p>
    </div>
    </>
  )
}
