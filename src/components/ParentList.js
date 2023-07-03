import React from "react";
import ParentInfo from "./ParentInfo";
import { v4 as uuid } from "uuid";


function ParentList( {parents} ) {


    return(
        <div>
            <h2>Parents List</h2>
            {parents.map((parent) => 
            <ParentInfo
                key={uuid()}
                familyName = {parent.family_name}
                kids = {parent.kids}
            />)}
        </div>
            
    )
}

export default ParentList;