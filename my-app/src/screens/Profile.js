import './profile.css';
import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleCheckbox} from "../store/profile/action";

export const Profile =() => {
    const dispath = useDispatch();
    const state = useSelector(state => state);
    console.log(state)

    const handleClick = () => {
        dispath(toggleCheckbox)
    }

    const checkBoxChecker = useRef();



    return (
        <>
            <h3>This is Profile</h3>
            {state.showName && <span>{state.name}</span>}
            {/*<button onClick={handleClick}>change show name</button>*/}
            <input type="checkbox" id="checkbox" ref={checkBoxChecker} onClick={handleClick} className="checkbox-resiver"/>
            <label htmlFor="checkbox">переключатель</label>


        </>
    );
}