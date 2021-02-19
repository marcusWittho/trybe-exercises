import React from 'react';
import './App.css';

const tasks = ['Task_1', 'Task_2', 'Task_3', 'Task_4', 'Task_5', 'Task_6'];

const App = () => (<ul>{ tasks.map(task => <li>{ task }</li>) }</ul>);

export default App;
