const TodoItem = ({
  item,
  index,
  isEditing,
  editedTask,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  onStatusChange,
}) => {
  return (
    <li className="flex items-center mb-2">
      {isEditing ? (
        <input
          className="border rounded p-2 mr-2"
          type="text"
          value={editedTask?.task}
          onChange={(e) => onStatusChange(e, index)}
        />
      ) : (
        <span className="mr-2">{item.task}</span>
      )}
      <select
        className="border rounded p-2 mr-2"
        value={isEditing ? editedTask?.status : item.status}
        onChange={(e) => onStatusChange(e, index)}
        disabled={!isEditing}
      >
        <option value="start">Start</option>
        <option value="inprogress">In Progress</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      {isEditing ? (
        <>
          <button
            className="bg-green-500 text-white p-2 rounded mr-2"
            onClick={() => onSave(index)}
          >
            Save
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <button
            className="bg-yellow-500 text-white p-2 rounded mr-2"
            onClick={() => onEdit(index)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
