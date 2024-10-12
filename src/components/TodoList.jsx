import TodoItem from "./TodoItem";

const TodoList = ({
  list,
  editIndex,
  editedTask,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  onStatusChange,
}) => {
  return (
    <div>
      <ol>
        {list.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            isEditing={editIndex === index}
            editedTask={editedTask}
            onEdit={onEdit}
            onSave={onSave}
            onCancel={onCancel}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
          />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
