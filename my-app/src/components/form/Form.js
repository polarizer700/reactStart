import { useState,useEffect,useRef } from "react";
import './form..css'
import {Button, TextField} from "@mui/material";

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState("");
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
        setValue("");
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            {/*<textarea value={value} onChange={handleChange} type="text" className="form-input" ref={inputRef} />*/}
            {/*<input type="submit" className="form-button"/>*/}
            <TextField value={value} onChange={handleChange} type="text" className="form-input" ref={inputRef} />
            <Button type="submit" className="form-button">Sumbit</Button>
        </form>

    );
};