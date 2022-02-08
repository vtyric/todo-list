import React, {Component} from 'react';
import './search.panel.css';

export default class SearchPanel extends Component {
    onLabelChange = (e) => this.props.onSearchLabelChange(e.target.value)

    render() {
        return (
            <input
                className="search form-control"
                placeholder="type to search"
                type="text"
                onChange={this.onLabelChange}
            />);
    }
}


