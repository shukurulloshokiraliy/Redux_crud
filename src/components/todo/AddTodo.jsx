import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import { useState } from "react";
import plus from "../../assets/images/plus.svg";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value.trim();
    if (!text) return;
    dispatch(addTodo(text));
    e.target.reset();
  };

  return (
    <div className="mb-8">
      <form
        onSubmit={handleSubmit}
        className="
          flex gap-3 p-3 rounded-xl
          bg-white border border-gray-200
          shadow-sm
        "
      >
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="New Todo submit..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full px-4 py-3 rounded-lg
              bg-gray-50 text-gray-800 placeholder-gray-400
              border transition-colors duration-150
              ${isFocused ? "border-blue-400 bg-white" : "border-gray-200"}
            `}
          />
        </div>

        <button
          type="submit"
          className="
            px-6 py-3 rounded-lg
            bg-blue-600 text-white font-medium
            flex gap-3
            hover:bg-blue-700
            active:scale-95 transition duration-150
          "
        >
          Add <img src={plus} alt="" className="w-6" />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
