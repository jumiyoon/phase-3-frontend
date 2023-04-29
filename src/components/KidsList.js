import React from "react";
import KidInfo from "./KidInfo";

function KidsList( {kids, parents, onDeleteKid} ) {
    return (
        <div>
            {kids.map((kid) => (
            <KidInfo
                key={kid.id}
                name={kid.name}
                id={kid.id}
                dietaryRestrictions={kid.dietary_restrictions}
                parents={parents.filter((parent) => parent.id === kid.parent_id)}
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


