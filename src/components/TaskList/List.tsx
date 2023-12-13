import React, { useContext, useState } from 'react';
import moment from 'moment/moment';
import { TaskResponseInterface } from '../../services/task-response.interface';
import { useNavigate } from 'react-router-dom';
import { TaskListContext, TaskListContextInterface } from '../../context/TaskListContext';

const List = () => {
  	const [favorites, setFavorites] = useState<TaskResponseInterface[]>(
    		JSON.parse(localStorage.getItem('favorites') || '[]')
  	);
  	const navigate = useNavigate();
 	 const { taskList, handleDeleteTask } = useContext<TaskListContextInterface>(TaskListContext);

  		const toggleFavorite = (task: TaskResponseInterface) => {
    		const updatedFavorites = [...favorites];

    		const taskIndex = updatedFavorites.findIndex(
      		(favTask: TaskResponseInterface) => favTask.id === task.id
    		);

    		if (taskIndex === -1) {
      			updatedFavorites.push(task);
    		} else {
     			 updatedFavorites.splice(taskIndex, 1);
    			}

    		setFavorites(updatedFavorites);
   		 localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  	};

  	return (
    		<div className="grid grid-cols-2 gap-4">
      			{taskList.length !== 0 ? (
       				 taskList.map((task) => (
          					<div
           						 key={task.id}
           						 className="p-4 rounded-md bg-pink-700 cursor-pointer"
            					onClick={() => navigate(`task/${task.id}`)}
          	>
           						 <div className="text-pink-200 text-2xl text-center">
              						<h1>{task.title}</h1>
            					</div>
           						 <div className="flex flex-col items-center justify-center space-y-2">
             						 <div className="flex space-x-2">
                								<button
                 									 onClick={() => toggleFavorite(task)}
                  									className={`${
                    										favorites.some((favTask: TaskResponseInterface) => favTask.id === task.id)
											? 'bg-green-500 text-white'
											: 'bg-red-500 text-white'
									} cursor-pointer  text-xl rounded-full py-2 px-4 transition-transform duration-300 hover:shadow-md hover:-translate-y-1 focus:shadow-md focus:outline-none`}
                								>
                  FAVOR
                								</button>
                								<button
                  										onClick={() => handleDeleteTask(task.id)}
                 										 className="bg-red-700 text-white text-xl rounded-full py-2 px-4 transition-transform duration-300 hover:shadow-md hover:-translate-y-1 focus:shadow-md focus:outline-none"
               									 >
                  DELETE
                								</button>
              							</div>
              							<div className="text-white text-sm">
                								<span>{moment(task.dueDate).format('Do MMM YYYY')}</span>
              							</div>
            						</div>
          					</div>
        				))
      			) : (
        				<div className="flex justify-center text-gray-500 text-3xl">There are no tasks</div>
      			)}
    		</div>
 	 );
};

export default List;
