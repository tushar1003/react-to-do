import { motion } from "framer-motion";
import React, { useRef } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo} = props;
  
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    
    <li
    onClick={() => changeFocus()}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      className="card"
      style={{
        border: item.completed ?  "2px solid #7AB530":"none",
        backgroundColor: item.completed ? "#202020" :"#2F2F2F",
        boxShadow: item.completed? "none":"0 0 16px 21px rgba(0,0,0,0.35)",
      }}
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
       
      />
      <hr className="hr"  />
      <div className="btns">
        <div className="container">
        {item.completed === false && (
          <button
            style={{ color: "white",fontSize:"0.7rem",backgroundColor:"#C620A7",borderRadius:"0px" }}
            onClick={() => completeTodo(item.id)} 
          >
           Mark as completed
          </button>
        )}
        {item.completed === true && (
          <button
            style={{ color: "#AFAFAF",fontSize:"0.7rem",borderRadius:"0px" }}
          >
           Mark as completed
          </button>
        )}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "#AFAFAF",fontSize:"0.7rem",width:"6rem" }}
          onClick={() => removeTodo(item.id)}
        >
          {" "}
          Delete
        </motion.button>
        </div>{" "}
      </div>
      {item.completed &&<span style={{position:"absolute",top:"25px",right:"-10px"}}>
        <AiFillCheckCircle style={{fontSize:"1.7rem",color:"#7AB530",zIndex:"5"}}/>
        </span> }
    </li>
  );
};

export default TodoItem;
