import React from 'react';
import Heading from '../Common/Heading';

class BlogComponent extends React.Component {
    render() {
        return (<div><div  style={{display: 'flex', justifyContent: "space-around", marginTop: '20px'}}>
            <div>
                <Heading title={this.props.title} />
                <div style={{display: 'flex', justifyContent: "space-around"}}>
                    <div>{this.props.minute} min read</div>
                    <div>View story</div>
                </div>
            </div>
            <div> <Heading title={this.props.views} /> </div>
            <div> <Heading title={this.props.reads} /> </div>
        </div><hr /></div>)
    }
}

export default BlogComponent;