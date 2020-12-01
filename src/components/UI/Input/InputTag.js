import React from 'react';


const inputTag = (props) => {

    return <input {...props.attributes} placeholder={props.placeholder} value={props.value} onChange={props.change}/>;


}

export default inputTag;