import React from 'react';
import BlogComponent from './BlogComponent';
class Tab extends React.Component {
    render() {
        const blogList = this.props.data.map((e,i) => {
            return (<BlogComponent title={e.title} minute={e.min} reads={e.reads} views={e.views} key={i}/>)
        })
        return (<div>
           {blogList}
        </div>)
    }
}

export default Tab;