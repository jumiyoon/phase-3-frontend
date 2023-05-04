import React, { useState } from "react";
import { Modal, Form, Header, Button, Icon } from "semantic-ui-react";

function NewParents( { onFormSubmit, allParents }) {
    const [open, setOpen] = useState(false)
    const [saved, setSaved] = useState(false);
    const [newParentsData, setNewParentsData] = useState({
        family_name: "",
        phone: "",
        service_time: "",
    });

    const serviceTimes = [
        {key: 'f', text: '1st Service', value: '1st Service'},
        {key: 's', text: '2nd Service', value: '2nd Service'}
    ]

    function handleParentsData(e) {
        let name
        let value
  
        if (e.target.name === undefined) {
            name = "service_time"
            value = e.target.textContent;
        } else {
            name = e.target.name;
            value = e.target.value;
        }

        setNewParentsData({
            ...newParentsData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        onFormSubmit(newParentsData);
        setSaved(true);
    }

    return (
        <Modal
            closeIcon
            as={Form}
            size='small'
            open={open}
            onClose={() => {
                setOpen(false);
                setSaved(false);
                setNewParentsData({
                    family_name: "",
                    phone: "",
                    service_time: "",
                })

            }}
            onOpen={() => setOpen(true)}
            onSubmit={(e)=> handleSubmit(e)} 
            trigger={<Button>Add New Family </Button>
        }
        >
            <Header icon="save" content="New Family Info" as="h3" />
            <Modal.Content>
            <Form.Input 
                    label="Family Name" 
                    name="family_name"
                    type="text" 
                    onChange={handleParentsData}
                    value={newParentsData.id}
                    autoComplete="off" />
            <Form.Input 
                    label="Phone Number" 
                    name="phone"
                    type="number"
                    onChange={handleParentsData}
                    value={newParentsData.phone}
                    autoComplete="off" />
            <Form.Select
                    fluid 
                    label="Service Time" 
                    name="service_time"
                    options={serviceTimes}
                    onChange={handleParentsData}
                    placeholder="Service Time"
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

export default NewParents;