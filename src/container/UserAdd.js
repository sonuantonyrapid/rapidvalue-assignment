import React,{Fragment,useState} from 'react';

import InputTag from '../components/UI/Input/InputTag';

const UserAdd = (props) => {

    const userInfo = {
        full_name:'',
        mob:''
    }

    const [userInfoState,setUserInfoState] = useState(userInfo);

    const feildsHandeler = (event) => {

        const updateUserInfoState = {...userInfoState};

        const value = event.target.value;
        const id = event.target.id;

        updateUserInfoState[id] = value;

        setUserInfoState(updateUserInfoState);

    }

    const adduserHandeler = () => {

        props.click(userInfoState);

    }

    const fetchFields = () => {
        
        const fields = [];

        props.fields.fields.forEach(item=>{

            fields.push(
                <Fragment key={item.id}>
                    <InputTag attributes={item.attributes} placeholder={item.lable} value={userInfoState[item.id]} change={feildsHandeler}/><br/><br/>
                </Fragment>
                );
        });

        return fields;

    }

    return (<div>

        <h1>Add User</h1>

        <div>

            {fetchFields()}
            <button type="button" onClick={adduserHandeler}>Submit</button>

        </div>

    </div>);


}

export default UserAdd;