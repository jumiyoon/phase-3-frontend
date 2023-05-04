import React from "react";
import ParentInfo from "./ParentInfo";
import { v4 as uuid } from "uuid";


function ParentList( {parents, kids} ) {


    return(
        <div>
            <h2>Parents List</h2>
            {parents.map((parent) => 
            <ParentInfo
                key={uuid()}
                parentId={parent.id}
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