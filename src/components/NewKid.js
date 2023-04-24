import React, { useState } from "react";

function NewKid(){
const [formData, setFormData] = useState({
    name: "",
    dietary_restrictions: ""
});

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