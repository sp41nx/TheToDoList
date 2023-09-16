import React, {useState} from 'react';
import {useAppDispatch} from "../app/hooks";
import {editTask} from "../features/TasksSlice";

interface Data {
    taskName: string,
    taskText: string
}


const FieldSet = ({taskName, taskText}: Data) => {

    const [isEdit, setIsEdit] = useState(false),
          [taskTextState, setTaskText] = useState(taskText),
           dispatch = useAppDispatch();
    return (
        <fieldset
            style={{
                width: '80%',
                height: "fit-content",
                margin: '1%',
                borderRadius: '5px',
                textShadow: '2px 2px 4px grey',
                }}
            onClick={() => {
                !isEdit && setIsEdit(prevState => !prevState);
                setTaskText(taskTextState);
            }}
            onMouseLeave={() => {
                if(isEdit){
                dispatch(editTask({taskName, taskTextState}));
                setIsEdit(false);
                }}}>
            <legend>{taskName}</legend>
                {isEdit ?
                <textarea
                    style={{
                        width: "80%",
                        height: '100px',
                        border: '0',
                        outline: 'none',
                    }}
                    value={taskTextState}
                    onChange={
                        (e) =>
                        setTaskText(e.target.value)}>
                </textarea> :
                taskTextState}
        </fieldset>
    );
};

export default FieldSet;