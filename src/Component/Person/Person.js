import React, { useState } from 'react';
import FakeData from '../../Fakedata/MOCK_DATA.json'
import Single from '../Single/Single';
import './Person.css'

const Person = () => {

    const [member, setMember] = useState(FakeData);
    const [addMem, setAddMem] = useState(10)

    const handleBtn = () => {
        setAddMem(addMem + 1);
    }
    return (
        <div className='fullPage'>
            <div className='leftSide'>
                {
                    member.map(mem => <Single handleBtn={handleBtn} single={mem}></Single>)
                }
            </div>
            <div className='rightSide'>
                <h1>My Friends : {addMem}</h1>
            </div>
        </div>
    );
};

export default Person;