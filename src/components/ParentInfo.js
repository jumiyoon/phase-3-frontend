import React from "react";

function ParentInfo( {id, familyName, kids }){
    const parentsKids = kids.filter(Boolean).map((kid) => <li key={kid}>{kid}</li>)
    const displayKids = parentsKids.length === 0 ? <p> Add kids!👧🏻 </p> : parentsKids

    return ( 
        <div>
            <b>👨‍👩‍👧‍👦 Family Name: </b>{familyName}  <b> <br/> </b>  <b>👧🏻 Kids: </b>{displayKids} <br /><br/>
        </div>
    )

}

export default ParentInfo;