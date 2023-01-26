import React from 'react'



export default function About(props) {
       
    //   const [myStyle,setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    //   })
    
    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
    }




    //   const [btnText,setBtnText]=useState("Enable Dark Mode")
    //    const toggleStyle=()=>{
    //       if(myStyle.color==='black'){
    //         setMyStyle({
            
    //                 color: 'white',
    //                 backgroundColor: 'black',
    //                 // border: '0.3px solid white'   
    //         })
    //         setBtnText("Enable Light Mode");
    //       }
    //       else{
    //         setMyStyle({
            
    //             color: 'black',
    //             backgroundColor: 'white'
            
    //        })
    //        setBtnText("Enable Dark Mode");
    //       }
    //    }


  return (
        <div className="container my-5" style={{ color:props.mode==='dark'?'white':'#042743',}}>
        <h1 className="my-3">About Us</h1>
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>Analayze Your Text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analayze your text quickly and efficiently.Be it with word count, character count or time count.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong> Free To Use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character count tool that provides instance character count and word count statistics for a given text.TextUtils report the number of words and characters.Thus it is suitable for writing text with word/character limit.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong> Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}  >
                    This word count software works in any web browser such as Chrome,FireFox,Internet Explorer, Sfari, Opera.It suits to count characters in facebook , blogs, books, excel document, pdf document, essays etc.
                    </div>
                </div>
                </div>
                </div>
                {/* <div className="container my-3">
                <button onClick={toggleStyle} className="btn btn-danger" type="button">{btnText}</button>
                </div> */}
                 {/* toggleStyle is a function */}
        </div>
  )
}
