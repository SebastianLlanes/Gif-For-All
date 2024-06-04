import { useState } from "react";

const AddCategory = ({ setCategory }) => {

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const searchGif = e => {
        e.preventDefault();
        if (value === '') {
            setError(true);
            return;
        }
        setError(false);
        setCategory(value)
        setValue('')
        console.log('enter form');
    }

    return ( 
        <>
            <form onSubmit={ searchGif } >
                <input type="text" placeholder="Search..."
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />
            </form>
            { error ? <p className="error" >This field can not be empty</p> : '' }
        </>
    );
}

export default AddCategory;