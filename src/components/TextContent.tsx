import React from "react";

function TextContent(){

    const [styleName, setStyleName] = React.useState({});
    const [styleTitle, setStyleTitle] = React.useState({});

    function HandleName(){
        setStyleName({color: "blue", opacity : 0.7});
    } 

    function HandleTitle(){
        setStyleTitle({color: "blue", opacity : 0.7});
    } 

    function HandleRemName(){
        setStyleName({});
    }

    function HandleRemTitle(){
        setStyleTitle({});
    }

    return <div className="content1">
    
        <p> 
            <div>Hello Everyone !!</div>
            <p>I am <div onMouseOver={HandleName} onMouseLeave={HandleRemName} style={styleName}> Shreshth Gupta </div></p>
            <p>a <div onMouseOver={HandleTitle} onMouseLeave={HandleRemTitle} style={styleTitle}>Coding Enthusiast ! </div></p>
        </p>
    
    </div>
}

export default TextContent;