import React from "react";

export default class Form extends React.Component {
    state = {
        code: "",
        states: "",
        keyword: "",
    }
    
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
          code: "",
          states: "",
          keyword: "",
        });
    }
    
    render() {
        return (
            <form>
                <input
                name="code"
                placeholder='Park Code'
                value={this.state.code}
                onChange={e => this.change(e)}/>
                <br />
                <input
                name="states"
                placeholder='Park State'
                value={this.state.states}
                onChange={e => this.change(e)}/>
                <br />
                <input
                name="keyword"
                placeholder='Keyword Search'
                value={this.state.keyword}
                onChange={e => this.change(e)}/>
                <br />
                
                <button onClick={(e) => this.onSubmit(e)}>Submit</button>
                <br />
            </form>
        )
    }
}