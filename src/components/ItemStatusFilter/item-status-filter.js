import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    state = {
        current: "All"
    }
    buttons = [
        {label: "All"},
        {label: "Active", filter: "active"},
        {label: "Done", filter: "done"}
    ];

    onButtonClick = (filter, label) => {
        this.props.onFilterChange(filter);
        this.setState({current: label});
    }

    render() {
        const buttons = this.buttons.map(({label, filter = ""}) =>
            <button type="button"
                    className={`btn ${label === this.state.current ? "btn-success" : "btn-outline-secondary"}`}
                    key={filter}
                    onClick={() => this.onButtonClick(filter, label)}>
                {label}
            </button>);

        return (
            <div className="btns">
                {buttons}
            </div>
        );
    }
}
