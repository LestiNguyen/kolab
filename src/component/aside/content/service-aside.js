import React from 'react';
const content = (props) =>{
    return (
        <li onClick={props.click}><a>{props.name}</a></li>
    )
}
export default content