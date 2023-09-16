import {createSlice} from "@reduxjs/toolkit";
import {lorem_100} from "../utils/constants";

let i = 0;
const tasksSlice = createSlice({
    name: 'Task Slice',
    initialState: {
        tasks: [{
        taskName: "Description",
        taskText: "After complete fill new task fields press Enter or Esc key to cancel. For EDIT task, click on text, for SAVE just mouse remove.",
    },{
        taskName: "Task Name 1",
        taskText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            " Aliquam, atque cupiditate deleniti ducimus eaque earum eos hic in" +
            " laborum maiores mollitia natus necessitatibus nobis obcaecati placeat" +
            " provident quidem quisquam reiciendis reprehenderit repudiandae sed sequi",
    }
    ]},
    reducers: {
       addTask: (state, action) => {
           if(action.payload.taskName === '' || action.payload.taskText === ''){
               i = state.tasks.length;
               state.tasks.push({
                   taskName: action.payload.taskName ? action.payload.taskName : `Unnamed Task ${i++}`,
                   taskText: action.payload.taskText ? action.payload.taskText : lorem_100,
               });
               state.tasks.sort((a, b) =>
                   +a.taskName.slice(a.taskName.length-1) -
                   +b.taskName.slice(b.taskName.length-1));
           }else{
               console.log(action.payload)
               state.tasks.push(action.payload);
           }
       },
       removeTask: (state, action) => {
            i  = state.tasks.findIndex(e => e.taskName === action.payload.taskName);
           state.tasks.splice(i,1);
        },
        editTask: (state, action) => {
            i  = state.tasks.findIndex(e => e.taskName === action.payload.taskName);
            state.tasks[i].taskText = action.payload.taskTextState;
        }
    }
});

export default tasksSlice.reducer;
export const {addTask, editTask, removeTask} = tasksSlice.actions;