import React, {Dispatch, SetStateAction, useState} from 'react';
import './css/Modal.css';
import {useAppDispatch} from "../app/hooks";
import {addTask} from "../features/TasksSlice";

interface Props{
    setActive: Dispatch<SetStateAction<boolean>>
}

const Modal = ({setActive}: Props) => {


    const [taskName, setTaskName] = useState(''),
          [taskText, setTaskText] = useState(''),
           dispatch = useAppDispatch();

    return (
        <div className={'filter'}>
         <fieldset>
             <legend>Task Name</legend>
             <input
                 className={'nameField'}
                 style={{paddingLeft: '10px'}}
                 type={'text'}
                 value={taskName}
                 onChange={({target}) => {
                     setTaskName((target.value));
                 }}
                 onKeyUp={(e) =>{
                     if(e.code === 'Enter'){
                         dispatch(addTask({taskName, taskText}));
                         setActive(false);
                     }
                     if(e.code === 'Escape'){
                         setActive(false);
                     }
                 }}
                 />
         </fieldset>
            <fieldset
                className={'taskText'}>
                <legend>Task Name</legend>
                <textarea
                    className={'textField'}
                    onChange={({target}) => {
                        setTaskText(target.value);
                    }}
                    onKeyDown={(e) =>{
                        console.log(e.code)
                        if(e.code === 'Enter'){
                            dispatch(addTask({taskName, taskText}));
                            setActive(false);
                        } if(e.code === 'Escape'){
                            setActive(false);
                        }
                    }}
                    />
            </fieldset>
        </div>
    );
};

export default Modal;