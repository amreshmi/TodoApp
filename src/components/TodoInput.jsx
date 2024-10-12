const TodoInput = ({ input, onInputChange, onAdd }) => {
  return (
    <div className="mb-4">
      <input
        className="border rounded p-2 mr-2"
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={onAdd}
        disabled={!input.trim()}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
