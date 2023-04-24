import React, { useState } from "react";
import { Modal, Button, Form } from 'semantic-ui-react'


function EditRestrictions({ id } ) {
    const [restrictions, setRestrictions] = useState("");

    function handleFormSubmit() {
        fetch(`http://localhost:9292/kids/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dietary_restrictions: restrictions
          }),
        })
          .then((r) => r.json()) 
    }


    return (
        <div>

        </div>

    )
}

export default EditRestrictions;