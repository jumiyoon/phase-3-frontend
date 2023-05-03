import React from "react";
import ParentInfo from "./ParentInfo";


function ParentList( {parents} ) {


    return(
        <div>
            <h2>Parents List</h2>
            {parents.map((parent) => 
            <ParentInfo
                key={parent.id}
                familyName = {parent.family_name}
                kids={parent.kids.map((kid) => kid.name)}
                
            />)}
        </div>
            
    )
}

export default ParentList;