import React, { useState } from "react";
import { Button } from 'semantic-ui-react'


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

    const fieldStyle = {"width": "30%", "text-align": "center", "margin-left": "auto", "margin-right": "auto"}
    return (
        <div>
            <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="field" style={fieldStyle}>
                <input 
                placeholder="Restrictions" 
                type="text"
                value={restrictions}
                onChange={(e) => setRestrictions(e.target.value)}
                autoComplete="off"
                />
            </div>
                <Button type="submit" size="tiny" basic color="blue">Save Changes</Button>
            </form>
        </div>

    )
}

export default EditRestrictions;