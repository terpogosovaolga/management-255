import { useState } from "react";
import { Link } from "react-router-dom";
import TaskHeader from "./TaskHeader";
import TaskBody from "./TaskBody";
export default function Task({task, number}) {

    const level = number.split(".").length - 2; // уровень - это количество точек -1
    const style = {"paddingLeft": (level*2)+"rem"};


    return (
        <div className="editing-content-task" style={style}>
            <TaskHeader task={task} number={number} />
            <TaskBody task={task} />
        </div>
    )
}