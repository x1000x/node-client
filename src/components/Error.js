import React from 'react';
import {func, string} from "prop-types";
import {Button} from "antd";
import {useHistory} from "react-router-dom";

const Error = ({img, title, action}) => {
        const history = useHistory();
        const checkIfActionProp = () => !!action && action();

    const onClick = () =>{
        checkIfActionProp();
        history.push("/");
    }
    
    return (
        <div className='error-wrapper'>
           <img alt='error-img' src={img}/>
           <h1 className='error-title'>{title} </h1>
           <Button type="primary" onClick={onClick}>Go to Home</Button>
        </div>
    );
};
    Error.propTypes = {
        img: string.isRequired,
        title: string.isRequired,
        action: func,
    };

    Error.defaulProps = { func: () => { }};


export default Error
