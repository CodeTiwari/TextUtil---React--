import React ,{useState} from "react";
function Container() {
    const[text , updateTextValue]=useState(0);

    // function invoked to change the content into upper case!!
    function upperCase(){
        var textvalue=text.toUpperCase();
        updateTextValue(textvalue)
    }

    // function invoked to change the content into lowarCase !!
    function lowercase(){
        var textvalue=text.toLowerCase();
        updateTextValue(textvalue)

    }


    const wordCount = (text) => {
        if (typeof text !== 'string') {
            return 0;
        }
        const words = text.trim().split(/\s+/);
        return words.length;
    };

    const textCount =(text)=>{
        const textwords=text.length;
        return textwords;
    }

    const camelCase = () => {
        console.log(text);
        updateTextValue(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
    }

    const handelCopy =()=>{
        var texts=document.getElementById('exampleFormControlTextarea1');
       if(navigator.clipboard.writeText(texts.value)){
        alert('Text Copied Paste anywhere you want!!')
       }else{
        alert("Something went worng");
       };
    }
    

    





    return(
        <>
        <div className="title">
            <h1 className="text-center">Text-Transformer</h1>
        </div>
        <div className="container">
            <div className="row">
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={(e) => updateTextValue(e.target.value)} rows="6"></textarea>
            </div>
            <div className="buttons mt-3 text-center">
            <input type="button" className="btn btn-primary" onClick={upperCase} value="To-Capital" />
            <input type="button" className="btn btn-primary m-3" onClick={lowercase} value="To-Small" />
            <input type="button" className="btn btn-primary m-3" onClick={camelCase} value="camelCase Sentence" />
            <input type="button" className="btn btn-primary m-3" onClick={handelCopy} value="Copy Text" />
        </div>
        <div className="wordcount">
            <p className="count">The Text have been Written by you have a {wordCount(text)} no of words and {textCount(text)} no of texts.</p>
        </div>
        </div>
       
        </>
    );
}

export default Container;
