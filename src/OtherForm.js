import React from "react";

export default class OtherForm extends React.Component {
    state = {
        stateCode: "",
        parkCode: "",
    }
    
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    onSubmit2 = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
          description: "",
        });
    }
    
    render() {
        return (
            <form>
                <input
                name="parkCode"
                placeholder='Park Code'
                value={this.state.parkCode}
                onChange={e => this.change(e)}/>
                <br />
                <input
                name="stateCode"
                placeholder='State Code'
                value={this.state.stateCode}
                onChange={e => this.change(e)}/>
                <br />
                <button onClick={(e) => this.onSubmit2(e)}>Submit</button>
                <br />
            </form>
        )
    }
}