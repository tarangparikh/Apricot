import React, {useState} from "react";
import {Button, Form, Modal, Table} from "react-bootstrap";


const CompanyUpdateModal = (props) => {
    const [validated, setValidated] = useState(false);
    const [company,setCompany] = useState({
        id: props.company.id,
        businessName: props.company.businessName,
        contactNumber: props.company.contactNumber,
        gstInNumber: props.company.gstInNumber,
        email: props.company.email,
        address: props.company.address,
        state: props.company.state,
        bankName: props.company.bankName,
        accountNumber: props.company.accountNumber,
        ifscCode: props.company.ifscCode,
        isSelected: props.company.isSelected,
        user: props.company.user
    })

    const form_data = [
        {name:'Business Name',access:'businessName',pattern:'(.)*'},
        {name:'Contact Number',access:'contactNumber',pattern:"^((\\+)?(\\d{2}))?(\\d{10}){1}?$"},
        {name:'GST-In Number',access:'gstInNumber',pattern:'(.)*'},
        {name:'Email',access:'email',pattern:'^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$'},
        {name:'Address',access:'address',pattern:'(.)*'},
        {name:'State',access:'state',pattern:'(.)*'},
        {name:'Bank Name',access:'bankName',pattern:'(.)*'},
        {name:'Account Number',access:'accountNumber',pattern:'(.)*'},
        {name:'IFSC Code',access:'ifscCode',pattern:'(.)*'}
    ]
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else{
            alert('MODAL : '+JSON.stringify(company))
            props.updateHandler(company)
            //alert('submiting')
        }
        setValidated(true);
    };
    const handleChange = (event,attribute) => {
        let obj = {}
        obj[attribute] = event.target.value;
        setCompany((prevState => {
            return {...prevState,...obj}
        }))
    }
    const make_from_data = () => {
        const sub_data = form_data.map(value => {
            return(
                <tr>
                    <td>
                        {value["name"]}
                    </td>
                    <td>
                        <Form.Control
                            required
                            type="text"
                            pattern={value["pattern"]}
                            placeholder={'Enter '+value["name"]}
                            defaultValue={props.company[value["access"]]}
                            onChange={event => handleChange(event,value["access"])}
                        />
                        <Form.Control.Feedback type="invalid">
                            {'Please enter valid '+value["name"]}
                        </Form.Control.Feedback>
                    </td>
                </tr>
            )
        })
        return(
            <tbody>
            {sub_data}
            </tbody>
        )
    }
    return(
        <Modal show={props.show} onHide={props.closeHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Company Detailed View</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Body>
                <div>
                    <Table>
                        <thead>
                        <tr>
                            <th colSpan="2">Details</th>
                            <th></th>
                        </tr>
                        </thead>
                        {make_from_data()}
                    </Table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeHandler}>
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Modal.Footer>
            </Form>
        </Modal>
    )
}
export default CompanyUpdateModal