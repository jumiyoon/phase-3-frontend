import React from "react";
import KidInfo from "./KidInfo";

function KidsList( {kids, onDeleteKid} ) {
    return (
        <div>
            {kids.map((kid) => (
            <KidInfo
                key={kid.id}
                name={kid.name}
                id={kid.id}
                dietaryRestrictions={kid.dietary_restrictions}
                parentName={kid.parent.family_name}
                parentPhone={kid.parent.phone}
                pickupTime={kid.parent.service_time}
                onDeleteKid={onDeleteKid}
            />
            ))}
            {/* {kids.map((kid) =>
                <KidInfo
                    kid={kid}
                    name={kid.name}
                    id={kid.id}
                    dietaryRestrictions={kid.dietary_restrictions}
                    onDeleteKid={onDeleteKid}
                />)} */}
        </div>
    )
}

export default KidsList;


