import React , { useState } from "react";
import { Button } from 'semantic-ui-react';

function KidInfo( { id, name, dietaryRestrictions, parentName, parentPhone, pickupTime, onDeleteKid } ) {
    const [ isOpen, setIsOpen ] = useState(false)
    
    const parentInfoButton = <Button size="tiny" basic color='black' onClick = {() => setIsOpen(!isOpen)}>{ isOpen ? "Hide Parent Info" : "View Parent Info" } </Button>
    const parentInfo = 
        (<div>
            <b>👨‍👧‍👦 Name:</b> {parentName} <br/>
            <b>📱 Phone Number: </b> {parentPhone} <br/>
            <b>⏰ Pickup Time: </b> {pickupTime}
        </div>)

    return (
        <div>
            <li>
                <b>👧🏻 Name: </b>{name}  <b>||</b>  <b>🥗 Dietary Restrctions: </b>{dietaryRestrictions} <br /><br/>
                {parentInfoButton}
                {isOpen ? parentInfo : null} <br />



            </li>



        </div>
    )

}

export default KidInfo;