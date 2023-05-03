import React from "react";
import ParentInfo from "./ParentInfo";


function ParentList( {parents, kids} ) {


    return(
        <div>
            <h2>Parents List</h2>
            {parents.map((parent) => 
            <ParentInfo
                key={parent.id}
                id={parent.id}
                familyName = {parent.family_name}
                kids={kids.map((kid) => {
                    if (kid.parent_id === parent.id) {
                        return kid.name;
                    } })}
                
                
            />)}
        </div>
            
    )
}

export default ParentList;