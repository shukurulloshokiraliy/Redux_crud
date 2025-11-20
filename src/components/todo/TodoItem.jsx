import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  editTodo,
  setEditId,
  setEditText,
  cancelEdit,
} from "../../store/todoSlice";
import pen from "../../assets/images/pen.svg";
import trash from "../../assets/images/trash.svg";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { editId, editText } = useSelector((state) => state.todo);
  const isEditing = editId === todo.id;

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, title: editText }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    else if (e.key === "Escape") dispatch(cancelEdit());
  };

  return (
    <div 
      className={`
        group relative flex items-center gap-3 p-4 rounded-xl
        bg-white border-2 transition-all duration-300 ease-out
        hover:shadow-lg mb-3
        ${isEditing 
          ? 'border-blue-400 shadow-lg shadow-blue-100 scale-[1.02]' 
          : 'border-gray-200 hover:border-blue-200'
        }
        ${todo.checked ? 'bg-gray-50/50' : ''}
      `}
    >

      <div className={`
        absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full
        transition-all duration-300 ease-out
        ${todo.checked 
          ? 'h-full bg-gradient-to-b from-green-400 to-emerald-500' 
          : isEditing
          ? 'h-3/4 bg-gradient-to-b from-blue-500 to-cyan-500'
          : 'h-0 bg-blue-500 group-hover:h-1/2'
        }
      `} />
      <label className="relative flex items-center cursor-pointer group/checkbox">
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="sr-only peer"
        />
        <div className={`
          w-6 h-6 rounded-lg border-2 transition-all duration-300
          flex items-center justify-center
          ${todo.checked 
            ? 'bg-gradient-to-br from-blue-500 to-cyan-500 border-blue-500 scale-110' 
            : 'border-gray-300 group-hover/checkbox:border-blue-400 group-hover/checkbox:scale-110'
          }
        `}>
          {todo.checked && (
            <svg 
              className="w-4 h-4 text-white animate-in zoom-in duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </label>


      {isEditing ? (
        <div className="flex-1 relative">
          <input
            type="text"
            value={editText}
            onChange={(e) => dispatch(setEditText(e.target.value))}
            onKeyDown={handleKeyDown}
            autoFocus
            className="
              w-full px-4 py-2 rounded-lg
              bg-blue-50 text-gray-800 font-medium
              border-2 border-blue-300
              focus:outline-none focus:border-blue-500
              transition-all duration-200
            "
          />
          <div className="absolute inset-0 rounded-lg bg-blue-400/10 animate-pulse pointer-events-none" />
        </div>
      ) : (
        <p className={`
          flex-1 text-base font-medium transition-all duration-300
          ${todo.checked 
            ? 'line-through text-gray-400' 
            : 'text-gray-800'
          }
        `}>
          {todo.title}
        </p>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="
                px-4 py-2 rounded-lg
                bg-gradient-to-r from-green-500 to-emerald-500
                text-white font-semibold text-sm
                hover:shadow-lg hover:shadow-green-500/40 hover:scale-105
                active:scale-95
                transition-all duration-200
              "
            >
              Save
            </button>
            <button
              onClick={() => dispatch(cancelEdit())}
              className="
                px-4 py-2 rounded-lg
                bg-gradient-to-r from-red-500 to-rose-500
                text-white font-semibold text-sm
                hover:shadow-lg hover:shadow-red-500/40 hover:scale-105
                active:scale-95
                transition-all duration-200
              "
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() =>
                dispatch(setEditId({ id: todo.id, text: todo.title }))
              }
              className="
                p-2.5 rounded-lg
                bg-blue-100 hover:bg-blue-200
                transition-all duration-200
                hover:scale-110 hover:shadow-md
                active:scale-95
                group/edit
              "
            >
              <img 
                src={pen} 
                alt="Edit" 
                className="w-5 h-5 transition-transform duration-200 group-hover/edit:rotate-12" 
              />
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="
                p-2.5 rounded-lg
                bg-red-100 hover:bg-red-200
                transition-all duration-200
                hover:scale-110 hover:shadow-md
                active:scale-95
                group/delete
              "
            >
              <img 
                src={trash} 
                alt="Delete" 
                className="w-5 h-5 transition-transform duration-200 group-hover/delete:scale-110" 
              />
            </button>
          </>
        )}
      </div>

  
      {todo.checked && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/10 to-emerald-400/10 pointer-events-none" />
      )}
    </div>
  );
};

export default TodoItem;