import React from 'react';
import Button from '../Common/Button';
import Heading from '../Common/Heading';
import UserIcon from './UserIcon';

class Header extends React.Component{
    handleClick = () => {
        alert("Upgraded");
    }
    render() {
        return(<div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button clickFn={this.handleClick} name="Upgrade" />
            <Heading title="Medium" />
            <UserIcon />
        </div>)
    }
}

export default Header;