import React from "react";

function ParentInfo( {familyName, kids }){
    console.log(kids)

    const kidNames = (
        kids.map((kid) => <li>{kid}</li>)
    )
    return (
        <div>
            <b>👨‍👩‍👧‍👦 Family Name: </b>{familyName}  <b> <br/> </b>  <b>👧🏻 Kids: </b>{kidNames} <br /><br/>
        </div>
    )

}

export default ParentInfo;