import React from "react";
import KidInfo from "./KidInfo";

function KidsList( {kids} ) {
    return (
        <div>
            {kids.map((kid) => (
            <KidInfo
                key={kid.id}
                name={kid.name}
                id={kid.id}
                dietaryRestrictions={kid.dietary_restrictions}
                // parentName={kid.parent.name}
                // parentPhone={kid.parent.phone}
                // pickupTime={kid.parent.service_time}
                // onDeleteKid={onDeleteKid}
            />
            ))}
        </div>
    )
}

export default KidsList;


