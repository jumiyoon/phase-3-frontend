import React, { useState } from "react";
import { Modal, Form, Header, Button, Icon } from "semantic-ui-react";


function NewKid( {parents, onFormSubmit} ){
    const [open, setOpen] = useState(false)
    // const [parentData, setParentData] = useState({
    //     family_name: "",
    //     phone: "",
    //     service_time: "",
    // });
    const [newKidForm, setNewKidForm] = useState({
        name: "",
        dietary_restrictions: "",
        parent_id: ""
    })


    const familyNames = parents.map((parent) => <option value={parent.id} key={parent.id}>{parent.family_name}</option>)

    // const serviceTimes = [
    //     {key: 'f', text: '1st Service', value: '1st Service'},
    //     {key: 's', text: '2nd Service', value: '2nd Service'}
    // ]

    // function handleParentData(e) {
    //     let name
    //     let value
  
    //     if (e.target.name === undefined) {
    //         name = "service_time"
    //         value = e.target.textContent;
    //     } else {
    //         name = e.target.name;
    //         value = e.target.value;
    //     }

    //     setParentData({
    //         ...parentData,
    //         [name]: value
    //     });
    // }
    
    function handleNewKid(e) {
        setNewKidForm({...newKidForm, [e.target.name]: e.target.value})
    }
    

    function handleSubmit() {
        onFormSubmit(newKidForm);
    }

    return (
        <Modal
            as={Form}
            open={open}
            size='small'
            onSubmit={(e)=> handleSubmit(e)} 
            onClose={() => setOpen(false)}
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
            {/* {saved ? <div>Saved!</div> : null} */}
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