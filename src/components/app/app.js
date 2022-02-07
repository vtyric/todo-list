import AppHeader from "../app-header";
import SearchPanel from "../search-pannel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../ItemStatusFilter";
import TodoItemAddPannel from "../todo-item-add-pannel";
import './app.css';

const App = () => {
    const todoData = [
        {label: "сделать сайт форму", important: true, id: 1},
        {label: "открыть тестовое от чела", important: true, id: 2},
        {label: "поиграть в доту", id: 3},
        {label: "дойти до качалки", id: 4, important: true, color: "grey"}
    ];

    return (
        <div className="app">
            <AppHeader todo={3} done={1}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoItemAddPannel/>
            <TodoList data={todoData}/>
        </div>
    );
};

export default App;