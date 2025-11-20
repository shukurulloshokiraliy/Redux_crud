import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import { useState } from "react";
import plus from "../../assets/images/plus.svg";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value.trim();
    if (!text) return;
    
    setIsSubmitting(true);
    dispatch(addTodo(text));
    e.target.reset();
    
    setTimeout(() => setIsSubmitting(false), 300);
  };

  return (
    <div className="mb-8 relative">
    
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 rounded-2xl blur-xl animate-pulse" />
      
      <div
        className={`
          relative bg-white rounded-2xl p-1.5
          transition-all duration-300 ease-out
          ${isFocused 
            ? 'shadow-2xl shadow-blue-500/30 ring-2 ring-blue-400/50' 
            : 'shadow-lg shadow-gray-200/50'
          }
        `}
      >
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 p-2 rounded-xl bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="flex-1 relative group">
            <input
              type="text"
              placeholder="New Todo submit..."
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`
                w-full px-5 py-3.5 rounded-xl
                bg-white text-gray-800 placeholder-gray-400
                border-2 transition-all duration-300
                focus:outline-none font-medium
                ${isFocused 
                  ? 'border-blue-400 shadow-md shadow-blue-100 pl-6' 
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
            />
            
          
            <div className={`
              absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full
              bg-gradient-to-b from-blue-500 to-cyan-500
              transition-all duration-300 ease-out
              ${isFocused ? 'h-3/4 opacity-100' : 'h-0 opacity-0'}
            `} />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              relative px-6 py-3.5 rounded-xl
              bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500
              text-white font-bold
              flex items-center gap-2.5
              transition-all duration-300 ease-out
              hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105
              active:scale-95
              disabled:opacity-70 disabled:cursor-not-allowed
              group overflow-hidden
            `}
          >
       
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            
            <span className="relative z-10 transition-all duration-300">
              Add
            </span>
            
            <img 
              src={plus} 
              alt="" 
              className={`
                relative z-10 w-5 h-5 transition-all duration-300
                ${isSubmitting ? 'rotate-90 scale-110' : 'group-hover:rotate-180'}
              `}
            />
          </button>
        </form>
      </div>

  
      <div className="absolute -top-2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-30" />
      <div className="absolute -top-1 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default AddTodo;