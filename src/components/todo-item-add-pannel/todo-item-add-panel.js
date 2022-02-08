import React, {Component} from 'react';
import './todo-item-add-panel.css';

export default class TodoItemAddPanel extends Component {
    state = {
        label: ''
    };

    onLabelChange = (e) => this.setState({label: e.target.value})

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.label) {
            return;
        }
        this.props.onItemAdd(this.state.label);
        this.setState({label: ''});
    }

    render() {
        return (
            <form
                className="todo-label d-flex"
                onSubmit={this.onSubmit}>
                <input placeholder="what you should do"
                       type="text"
                       className="form-control"
                       value={this.state.label}
                       onChange={this.onLabelChange}/>
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    add todo
                </button>
            </form>
        );
    }
}