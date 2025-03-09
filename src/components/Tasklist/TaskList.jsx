import React from "react";
import AcceptTast from "./AcceptTast";
import NewTask from "./NewTask";
import ComleteTask from "./ComleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] ml-2 overflow-y-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full  mt-10 rounded-md "
    >
      {data.tasks.map((elem, idx)=>{
        if(elem.active){
          return <AcceptTast key={idx} />
        }
        if(elem.newTask){
          return <NewTask key={idx}/>
        }
        if(elem.completed){
          return <ComleteTask key={idx}/>
        }
        if(elem.failed){
          return <FailedTask key={idx}/>
        }
      })}
    </div>
  );
};

export default TaskList;
