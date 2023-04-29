import React from "react";
import { Modal, Form, Header, Button, Icon } from "semantic-ui-react";

function NewParents() {

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
                    onChange={}
                    value={}
                    autoComplete="off" />
            <Form.Input 
                    label="Phone Number" 
                    name="phone"
                    type="number"
                    onChange={}
                    value={}
                    autoComplete="off" />
            <Form.Select
                    fluid 
                    label="Service Time" 
                    name="service_time"
                    options={serviceTimes}
                    onChange={}
                    placeholder="Service Time"
                    autoComplete="off" />
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' type="submit">
                <Icon name='checkmark' /> Submit
                </Button>
            </Modal.Actions>
        </Modal>

}

export default NewParents;