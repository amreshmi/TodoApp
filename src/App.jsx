import { useState } from "react";

const defaultState = {
  input: "",
  list: [],
  edit: null,
  editedOption: null,
};
const App = () => {
  const [state, setState] = useState(defaultState);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleAdd = () => {
    const newList = [
      ...state.list,
      {
        task: state.input,
        status: "start",
      },
    ];
    setState({
      ...state,
      input: "",
      list: newList,
    });
  };
  const handlSelect = (e, i) => {
    setState({
      ...state,
      editedOption: {
        ...state.editedOption,
        [i]: {
          ...state.editedOption[i],
          status: e.target.value,
        },
      },
    });
  };

  const handleEdit = (i) => {
    setState({
      ...state,
      editedOption: {
        [i]: {
          ...state.list[i],
        },
      },
      edit: {
        ...state.edit,
        [i]: true,
      },
    });
  };
  const handleSave = (i) => {
    state.list.splice(i, 1, state.editedOption?.[i]);
    setState({
      ...state,
      input: "",
      list: state.list,
      editedOption: {
        ...state.editedOption,
        [i]: null,
      },
      edit: {
        ...state.edit,
        [i]: false,
      },
    });
  };
  const handleCancel = (i) => {
    setState({
      ...state,
      editedOption: {
        ...state.editedOption,
        [i]: null,
      },
      edit: {
        ...state.edit,
        [i]: false,
      },
    });
  };

  const handleEditInput = (e, i) => {
    setState({
      ...state,
      editedOption: {
        ...state.editedOption,
        [i]: {
          ...state.editedOption?.[i],
          task: e.target.value,
        },
      },
    });
  };

  const handleDelete = (i) => {
    state.list.splice(i, 1);
    setState({
      ...state,
      list: state.list,
    });
  };

  return (
    <div>
      <h3>Todo App</h3>
      <input
        name="input"
        type="text"
        value={state.input}
        onChange={handleInput}
      />
      <button type="button" disabled={!state.input} onClick={handleAdd}>
        Add
      </button>
      <div>
        <ol>
          {state.list.length > 0 &&
            state.list.map((item, index) => (
              <li key={index}>
                {state.edit?.[index] ? (
                  <input
                    name="inputEdit"
                    type="text"
                    value={
                      state.edit?.[index]
                        ? state?.editedOption?.[index]?.task
                        : item.task
                    }
                    onChange={(e) => handleEditInput(e, index)}
                  />
                ) : (
                  <span>{item.task}</span>
                )}
                <select
                  name="status"
                  value={state?.editedOption?.[index]?.status || item.status}
                  onChange={(e) => handlSelect(e, index)}
                  disabled={!state.edit?.[index]}
                >
                  <option value="start">Start</option>
                  <option value="inprogress">In Progress</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
                {state.edit?.[index] ? (
                  <>
                    <button type="button" onClick={() => handleSave(index)}>
                      Save
                    </button>
                    <button type="button" onClick={() => handleCancel(index)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button type="button" onClick={() => handleEdit(index)}>
                      Edit
                    </button>
                    <button type="button" onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
