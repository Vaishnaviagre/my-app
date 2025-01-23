import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }

    const handleLoClick=()=>{
      console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase","success")
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
  }

  const handleVoClick=()=>{
    console.log("Lowercase was clicked" + text);
    let count = text.match(/[aeiouAEIOU]/g);
    count = count? count.length : 0
    let newText = ""
    setText(newText)
    alert(`Number of vowels: ${count}`)
}

  const removeExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(""))
  }

    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState("")
  return (
    <>
    <div className='container' style={{color:props.mode ==='dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode ==='dark'?'#042743':'white',color:props.mode ==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="10"/>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleVoClick}>Count Vowels</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      <p>{text.length>0?text : "Nothing to preview"}</p>
    </div>
    </>
  )
}
