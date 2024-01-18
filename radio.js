import React, {useState} from 'react';


function Radio(props) {
    const [nameChecked, setnameChecked] = useState('');
    const selectRadioBtn = (e) => {
        console.log(nameChecked );
        setnameChecked(e.target.value);
        console.log(nameChecked);
        console.log(e.target.value);
            props.sortBy(e);
    }

    return (
            <div>
                <h1>name: {nameChecked}</h1>
                <input type='radio' checked={nameChecked == 'name'} onChange={selectRadioBtn} value="name" />
                <label>Name</label>
                <input type='radio' checked={nameChecked == 'age'}  onChange={selectRadioBtn} value="age" />
                <label>Age</label>
            </div>
    )
}
export default Radio;