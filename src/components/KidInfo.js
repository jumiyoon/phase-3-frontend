import React , { useState } from "react";
import { Button } from 'semantic-ui-react';
import EditRestrictions from "./EditRestrictions";


function KidInfo( { id, name, dietaryRestrictions, parentName, parentPhone, pickupTime, onDeleteKid } ) {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isEditing, setIsEditing ] = useState(false);

    const parentInfoButton = <Button size="tiny" basic color='black' onClick = {() => setIsOpen(!isOpen)}>{ isOpen ? "Hide Parent Info" : "View Parent Info" } </Button>
    const parentInfo = 
        (<div>
            <b>👨‍👧‍👦 Name:</b> {parentName} <br/>
            <b>📱 Phone Number: </b> {parentPhone} <br/>
            <b>⏰ Pickup Time: </b> {pickupTime}
        </div>)

    function handleDeleteClick() {
        const confirm= window.confirm("Delete child data?");
        if (confirm) {
        fetch(`http://localhost:9292/kids/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
        }).then((res) => res.json)
g
        onDeleteKid(id);
        }
        else {
            console.log("Kid not deleted")
        }
        console.log(confirm);
    }

    return (
        <div>
            <li>
                <b>👧🏻 Name: </b>{name}  <b>||</b>  <b>🥗 Dietary Restrctions: </b>{dietaryRestrictions} <br /><br/>
                {parentInfoButton}
                {isOpen ? parentInfo : null} <br />
                <div className ="actions">
                    <Button nClick={() => setIsEditing((isEditing) => !isEditing)} basic color='green' size="tiny">
                            ✏️ Edit Dietary Restrictions
                    </Button>
                    <Button onClick={handleDeleteClick} basic color='red' size="tiny">
                        🗑 Delete Child Data
                    </Button>
                    {isEditing ? (
                        <EditRestrictions
                        id={id}
                        />
                    ) : null }

                </div>
                <br /> <br />
            </li>
        </div>
    )

}

export default KidInfo;