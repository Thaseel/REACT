import React, { useReducer } from "react";

import './Input.css';

const inputReducer = (state, action) => {
    {/* ...state is used for making a copy of existing state so that we don't lose it later */}
    switch(action.type) {
        case 'CHANGE' : 
            return {
                ...state,
                value: action.val,
                isValid : true
            };
        default: return state
    }
}

const Input = props => {
    {/* useReducer can be used instead of useState when you have more complex state or interconnected state basically advanced version of useState */}
    const [inputState, dispatch] = useReducer(inputReducer, {value : '', isValid: false});

    const changeHandler = event => {
        dispatch({type : 'CHANGE', val : event.target.value})
    };

    const element = props.element === 'input' ? <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler} value={inputState.value}/> : <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} value={inputState.value} />

    return <div className={`form-control ${!inputState.isVaild && 'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
};

export default Input;