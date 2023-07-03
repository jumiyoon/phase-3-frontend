import React from "react";



function ParentInfo( { familyName, kids }){
    const displayKids = kids.length === 0 ? <p> No kids yet — add kids! </p> : kids.map((kid) => <p>{kid.name}</p>)
  
    return ( 
        <div>
            <b>👨‍👩‍👧‍👦 Family Name: </b>{familyName}  <b> <br/> </b>  <b>👧🏻 Kids: </b>{displayKids} <br /><br/>
        </div>
    )

}

export default ParentInfo;

