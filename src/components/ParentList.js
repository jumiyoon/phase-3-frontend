import React from "react";

function ParentList( {parents} ) {



    const parentsKidsList = (
        parents.map((parent) => 
            <li>
                <h3>{parent.family_name}</h3> || <p>{parent.kids.map((kid) => kid.name)}</p>
            </li>
        )
    )

    return(
        <div>
            {parentsKidsList}
        </div>
    )

}

export default ParentList;