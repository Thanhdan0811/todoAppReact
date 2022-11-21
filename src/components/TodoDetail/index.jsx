import { useContext } from "react";
import { contextMain } from "../../reducer";


const TodoDetail = ({}) => {

    const { reducer } = useContext(contextMain);

    console.log(reducer.state);

    return (<>
        <div className="todo-detail">
            {reducer?.state?.selectedTodo?.todoDetail || "check you to do"}
        </div>
    </>);
}
 
export default TodoDetail;