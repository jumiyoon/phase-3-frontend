import React, { useState } from "react";
import { Modal, Radio, Form, Header, Button, Icon } from "semantic-ui-react";


function NewKid( {handleNewKid} ){
    const [open, setOpen] = useState(false)
    const [saved, setSaved] = useState(false);
    // const [formData, setFormData] = useState({
    //     family_name: "",
    //     phone: 1234567890,
    //     service_time: "",
    //     kids_attributes: 
    //         [{family_name: "Yoons"},
    //             {phone: 1234567890},]
    // });


    // function handleChange(e) {
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // }
    const [parentData, setParentData] = useState({
        family_name: "",
        phone: "",
        service_time: "",
    });
    const [kidData, setKidData] = useState([
            {name: ""},
            {dietary_restrictions: ""}
    ]);


    const serviceTimes = [
        {key: 'f', text: '1st Service', value: '1st Service'},
        {key: 's', text: '2nd Service', value: '2nd Service'}
    ]

    function handleParentData(e) {
        let name = e.target.name;
        let value = e.target.value;

        if (e.target.name === undefined) {
            name = "genre"
            value = e.target.textContent;
        }

        setParentData({
            ...parentData,
            [name]: value
        });
    }
    
    function handleKidData(e) {
        console.log(e.target.value)
        let name = e.target.name;
        let value = e.target.value;
        setKidData([
            {...kidData},
            {[name]: value}
        ]);
        console.log(kidData)
    }

    
    function handleSubmit(e) {
        e.preventDefault();
        const combinedData = {...parentData, kids_attributes: kidData}
        console.log(combinedData)
        fetch("http://localhost:9292/parents", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(combinedData),
        })
        .then((r) => r.json())
        .then((newKidData) => {
        console.log(newKidData)
        handleNewKid(newKidData)
     })
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
        <Form.Input 
                label="Family Name" 
                name="family_name"
                type="text" 
                onChange={handleParentData}
                value={parentData.family_name}
                autoComplete="off" />
         <Form.Input 
                label="Phone Number" 
                name="phone"
                type="number"
                onChange={handleParentData}
                value={parentData.phone}
                autoComplete="off" />
        <Form.Select
                fluid 
                label="Service Time" 
                name="phone"
                options={serviceTimes}
                onChange={handleParentData}
                placeholder="Service Time"
                autoComplete="off" />
   
            <Form.Input 
                label="Name" 
                name="name"
                type="text" 
                onChange={handleKidData}
                value={kidData.name}
                autoComplete="off" />
            <Form.Input 
                label="Dietary Restrictions" 
                name="dietary_restrictions"
                type="text"
                onChange={handleKidData} 
                value={kidData.dietary_restrictions}
                autoComplete="off" />
            {/* {saved ? <div>Saved!</div> : null} */}
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