import { MdOutlineDownloadDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const TodoList = ({data, checked, onHandleDelete, onHandleChecked}) => {  

  return (
    <li  className="todo-item">
      <span className={checked ? "notCheckList" : "checkList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleChecked(data)}>
        <MdOutlineDownloadDone />
      </button>
      <button className="delete-btn" onClick={() => onHandleDelete(data)}>
        <MdDelete />
      </button>
    </li>
  );
};
