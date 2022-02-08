import AppHeader from "../app-header";
import SearchPanel from "../search-pannel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../ItemStatusFilter";
import TodoItemAddPanel from "../todo-item-add-pannel";
import React, {Component} from 'react';
import './app.css';

export default class App extends Component {
    #maxId = 100;

    state = {
        todoData: [
            {label: "сделать сайт форму", id: 1, important: true, done: false},
            {label: "открыть тестовое от чела", id: 2, important: false, done: true},
            {label: "поиграть в доту", id: 3, important: false, done: true},
            {label: "дойти до качалки", id: 4, important: true, done: false}
        ],
        term: '',
        filter: ''
    };

    deleteItem = (id) => this.setState(({todoData}) => ({todoData: todoData.filter(d => d.id !== id)}));

    addItem = (text) => this.setState(({todoData}) =>
        ({todoData: [...todoData, {label: text, id: this.#maxId++, important: false, done: false}]}));

    #toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex(d => d.id === id);
        const oldItem = arr[idx];
        const newItem = {...arr[idx], [propName]: !oldItem[propName]};

        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    onToggleDone = (id) => this.setState(({todoData}) =>
        ({todoData: this.#toggleProperty(todoData, id, 'done')}));

    onToggleImportant = (id) => this.setState(({todoData}) =>
        ({todoData: this.#toggleProperty(todoData, id, 'important')}));

    onSearchLabelChange = (term) => this.setState({term});

    onFilterChange = (filter) => this.setState({filter});

    #search = (items, term) => items.filter(item => item.label.toLowerCase().includes(term.toLowerCase()));

    #filterItems = (items, filter) => {
        if (filter === 'active') {
            return items.filter(item => !item.done);
        }
        if (filter === 'done') {
            return items.filter(item => item.done);
        }
        return items;
    }

    render() {
        const {todoData, term, filter} = this.state;
        const doneCount = todoData.filter(d => d.done).length;
        const todoCount = todoData.length - doneCount;
        const items = this.#filterItems(this.#search(todoData, term), filter);

        return (
            <div className="app">
                <AppHeader todo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchLabelChange={this.onSearchLabelChange}/>
                    <ItemStatusFilter onFilterChange={this.onFilterChange}/>
                </div>
                <TodoItemAddPanel
                    onItemAdd={this.addItem}/>
                <TodoList
                    data={items}
                    onDelete={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}/>
            </div>
        );
    }
}