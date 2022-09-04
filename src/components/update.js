import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useEffect } from 'react'
import { useNavigate } from 'react-router'


export default function Update() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const updateAPIData = () => {
        axios.put(`https://6303cf790de3cd918b3e8119.mockapi.io/fakeDataa/${id}`, {
            firstName,
             lastName,
             checkbox
        }).then(() => {
            navigate('/read')
        })
    }
    
    const [id, setID] = useState(null);

        useEffect(() => {
            setID(localStorage.getItem('ID'))
            setFirstName(localStorage.getItem('First Name'));
            setLastName(localStorage.getItem('Last Name'));
            setCheckbox(localStorage.getItem('Checkbox Value'))
        }, []);

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
