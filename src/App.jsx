import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState(null);

  const handleInputChange = (value) => setInput(value);

  const handleAdd = () => {
    if (input.trim()) {
      setList([...list, { task: input, status: "start" }]);
      setInput("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedTask(list[index]);
  };

  const handleSave = (index) => {
    const updatedList = list.map((item, idx) =>
      idx === index ? editedTask : item
    );
    setList(updatedList);
    setEditIndex(null);
    setEditedTask(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditedTask(null);
  };

  const handleDelete = (index) => {
    const updatedList = list.filter((_, idx) => idx !== index);
    setList(updatedList);
  };

  const handleStatusChange = (e) => {
    const updatedTask = { ...editedTask, status: e.target.value };
    setEditedTask(updatedTask);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Todo App</h3>
      <TodoInput input={input} onInputChange={handleInputChange} onAdd={handleAdd} />
      <TodoList
        list={list}
        editIndex={editIndex}
        editedTask={editedTask}
        onEdit={handleEdit}
        onSave={handleSave}
        onCancel={handleCancel}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default App;
