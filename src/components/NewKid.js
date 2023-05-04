import React, { useState } from "react";
import { Modal, Form, Header, Button, Icon } from "semantic-ui-react";
import { v4 as uuid } from "uuid";


function NewKid( { parents, onFormSubmit} ){


    const [open, setOpen] = useState(false)
    const [saved, setSaved] = useState(false)
    const [newKidForm, setNewKidForm] = useState({
        name: "",
        dietary_restrictions: "",
        parent_id: ""
    })

    const familyNames = parents.map((parent) => <option value={parent.id} key={uuid()}>{parent.family_name}</option>)

    function handleNewKid(e) {
        setNewKidForm({...newKidForm, [e.target.name]: e.target.value})
    }
    
    function handleSubmit() {
        onFormSubmit(newKidForm);
        setSaved(true);
    }

    return (
        <Modal
            closeIcon
            as={Form}
            open={open}
            size='small'
            onSubmit={(e)=> handleSubmit(e)} 
            onClose={() => {
                setOpen(false);
                setSaved(false);
                setNewKidForm({
                    name: "",
                    dietary_restrictions: "",
                    parent_id: ""
                })
            }}
            onOpen={() => setOpen(true)}
            trigger={<Button>Add New Kid </Button>}
        >
        <Header icon="save" content="New Kid Info" as="h3" />
        <Modal.Content>        
            <label><b>Parents</b></label>
            <select 
                label="Parents" 
                name="parent_id"
                onChange={handleNewKid}
                value={newKidForm.parent_id}>
                <option> </option>
                {familyNames}
            </select>
            <br/>
            <Form.Input 
                label="Kid Name" 
                name="name"
                type="text" 
                onChange={handleNewKid}
                value={newKidForm.name}
                autoComplete="off" />
            <Form.Input 
                label="Dietary Restrictions" 
                name="dietary_restrictions"
                type="text"
                onChange={handleNewKid} 
                value={newKidForm.dietary_restrictions}
                autoComplete="off" />
            {saved ? <div>Saved!</div> : null}
        </Modal.Content>
        <Modal.Actions>
            <Button color='green' type="submit">
            <Icon name='checkmark' /> Submit
            </Button>
        </Modal.Actions>
        </Modal>
    )
}

export default NewKid;