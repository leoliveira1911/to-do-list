import React from "react";
import { Routes, Route } from 'react-router-dom'

import Home from '../components/home/Home'

import Task from "../components/user/Task.tsx";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/users' element={<Task />}></Route>
            <Route from='*' element={<Home />} />
        </Routes>

    )
}

export default RoutesComponent
