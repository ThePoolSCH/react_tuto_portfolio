import React from "react";
import TaskList from '../TaskList'
import TaskForm from '../TaskForm'
export default function AboutUs(){
    return(
        <main className="bg-zinc-900 min-h-[560px]">
            <div className="container mx-auto p-10">
                <TaskForm/>
                <TaskList/>
            </div>
        </main>
    )
}