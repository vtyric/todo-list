import AppHeader from "../app-header";
import SearchPanel from "../search-pannel";
import TodoList from "../todo-list";
import './app.css';
import ItemStatusFilter from "../ItemStatusFilter";

const App = () => {
    const todoData = [
        {label: "сделать сайт форму", important: true, id: 1},
        {label: "открыть тестовое от чела", important: true, id: 2},
        {label: "поиграть в доту", id: 3},
        {label: "дойти до качалки", id: 4, important: true, color: "grey"}
    ];

    return (
        <div>
            <AppHeader/>
            <div>
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList data={todoData}/>
        </div>
    );
};

export default App;