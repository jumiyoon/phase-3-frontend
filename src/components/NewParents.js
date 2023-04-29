import React, { useState } from "react";
import { Modal, Form, Header, Button, Icon } from "semantic-ui-react";

function NewParents() {
    const [parentData, setParentData] = useState({
        family_name: "",
        phone: "",
        service_time: "",
    });

    const serviceTimes = [
        {key: 'f', text: '1st Service', value: '1st Service'},
        {key: 's', text: '2nd Service', value: '2nd Service'}
    ]

    function handleParentData(e) {
        let name
        let value
  
        if (e.target.name === undefined) {
            name = "service_time"
            value = e.target.textContent;
        } else {
            name = e.target.name;
            value = e.target.value;
        }

        setParentData({
            ...parentData,
            [name]: value
        });
    }

    return (
        <Modal
            as={Form}
            open={open}
            size='small'
            onSubmit={(e)=> handleSubmit(e)} 
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button>Add New Family </Button>}
        >
            <Header icon="save" content="New Family Info" as="h3" />
            <Modal.Content>
            <Form.Input 
                    label="Family Name" 
                    name="family_name"
                    type="text" 
                    onChange={parentData.famil_yname}
                    value={}
                    autoComplete="off" />
            <Form.Input 
                    label="Phone Number" 
                    name="phone"
                    type="number"
                    onChange={}
                    value={parentData.phone}
                    autoComplete="off" />
            <Form.Select
                    fluid 
                    label="Service Time" 
                    name="service_time"
                    options={serviceTimes}
                    onChange={parentData.service_time}
                    placeholder="Service Time"
                    autoComplete="off" />
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' type="submit">
                <Icon name='checkmark' /> Submit
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default NewParents;