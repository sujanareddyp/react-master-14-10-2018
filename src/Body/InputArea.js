import React from 'react';

class InputArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listArray: ["L1", "L2"],
            inputVal: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            inputVal: e.target.value
        })
    }
    add = () => {
        if (this.state.inputVal && this.state.inputVal !== "") {
            let newArray = this.state.listArray;
            newArray.push(this.state.inputVal)
            this.setState({
                ...this.state,
                listArray: newArray,
                inputVal: ""
            })
        }
    }
    render() {
        const list = this.state.listArray.map((e, i) => {
            return (<li key={i}>{e}</li>);
        })
        return (<div>
            <input value={this.state.inputVal} onChange={this.handleChange} placeholder="Enter new list value" />
            <button onClick={this.add}>Add to List</button>
            {list}
        </div>)
    }
}

export default InputArea;