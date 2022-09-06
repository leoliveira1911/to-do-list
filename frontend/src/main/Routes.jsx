import React from "react";
import { Routes, Route } from 'react-router-dom'

import Home from '../components/home/Home'
import UserCrud from "../components/user/TaskCrud";
import Task from "../components/user/Task";

export default props =>
    <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/users' element={<Task />}></Route>
        <Route from='*' element={<Home />} />
    </Routes>
