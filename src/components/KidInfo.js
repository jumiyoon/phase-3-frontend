import React from "react";
import { Button } from 'semantic-ui-react';

function KidInfo( { id, name, dietaryRestrictions, parentName, parentPhone, pickupTime, onDeleteKid } ) {
    const parentInfoButton = <Button size="tiny" basic color='black' onClick = {() => setIsOpen(!isOpen)}>{ isOpen ? "Hide Parent Info" : "View Parent Info" } </Button>
    const parentInfo = 
        (<div>
            <b>👨‍👧‍👦 Name:</b> {parentName} <br/>
            <b>📱 Phone Number: </b> {parentPhone} <br/>
            <b>⏰ Pickup Time: </b> {pickupTime}
        </div>)

    return (
        <div>



        </div>
    )

}

export default KidInfo;