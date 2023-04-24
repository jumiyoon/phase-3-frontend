import React, { useState } from "react";
import { Modal, Form, Header, Button, Icon } from "semantic-ui-react";


function NewKid(){
    const [formData, setFormData] = useState({
        name: "",
        dietary_restrictions: ""
    });
    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        });

        console.log(e.target.name, ":", e.target.value)
        console.log(formData)
    }

    return (
        <Modal
        as={Form}
        open={open}
        size='small'
        trigger={<Button>Add New Kid </Button>}
        >
        <Header icon="save" content="New Kid Info" as="h3" />
        <Modal.Content>
            <Form.Input 
                label="Name" 
                name="name"
                type="text" 
                onChange={handleChange}
                value={formData.name} />
            <Form.Input 
                label="Dietary Restrictions" 
                name="dietary_restrictions"
                type="text"
                onChange={handleChange} 
                value={formData.dietary_restrictions} />
        </Modal.Content>
        <Modal.Actions>
            {/* <Button type="button" basic color='red' onClick={() => setOpen(false)}>
            <Icon name='remove' /> Close
            </Button> */}
            <Button color='green' type="submit">
            <Icon name='checkmark' /> Submit
            </Button>
        </Modal.Actions>
        </Modal>
    )
}

export default NewKid;