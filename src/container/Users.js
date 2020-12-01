import React from 'react';
import {NavLink} from 'react-router-dom';


const user = (props) => {

    const list = [];

    props.users.forEach((item,index) => {

    list.push(
        <li key={'list_'+index}>
            {item.full_name}
        </li>
    );
        
    });

    return (<div>
        
        <div>
            <ul>
                {list}
            </ul>
        </div>
    </div>);


}

export default user;