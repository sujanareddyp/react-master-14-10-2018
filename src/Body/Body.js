import React from 'react';
import InputArea from './InputArea';
import BlogArea from './BlogArea';

class Body extends React.Component{
    render() {
        return(<div>
            <InputArea />
            <BlogArea />
        </div>)
    }
}

export default Body;