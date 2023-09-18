import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {AddTaskBtn, Button, Head, Item, List, TextField} from "./components/styled";
import {Buffer} from "buffer";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {addTask, removeTask} from "./features/TasksSlice";
import FieldSet from "./components/FieldSet";
import Modal from "./components/Modal";

function App() {
    const store = useAppSelector(state => state.tasksSlice.tasks),
          dispatch = useAppDispatch(),
          [state, setState] = useState(0),
          [modalActive, setModalActive] = useState(false);


    return (
        <div className="App">
            {modalActive && <Modal setActive={setModalActive}/>}
            <Head>
                Todo List
            </Head>
            <List>
                {store.map((e, i) =>
                    <Item key={e.taskName}>
                        <FieldSet
                            taskName={e.taskName}
                            taskText={e.taskText}/>
                        <input
                            style={{width: '30px', height: '30px'}}
                            title={'Set task completed'}
                            type={'checkbox'}/>
                        <Button
                            title={"Remove task"}
                            onClick={() => {
                                dispatch(removeTask({taskName: e.taskName}));
                            }}
                        >
                            ❌
                        </Button>
                    </Item>)}
                <AddTaskBtn style={{boxShadow: `${state/150}px ${state/150}px ${state/50}px black`}}
                            onClick={() =>{
                                setModalActive(true);
                            }}
                >
                    Add Task
                </AddTaskBtn>
            </List>
        </div>
    );
}

export default App;
