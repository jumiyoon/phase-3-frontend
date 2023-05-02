import React from "react";
import KidInfo from "./KidInfo";
import Search from "./Search";

function KidsList( {kids, parents, onDeleteKid, search, setSearch} ) {
    return (
        <div>
            <Search search={search} setSearch={setSearch} />
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
        </div>
    )
}

export default KidsList;


