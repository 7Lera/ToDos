import React from 'react';
import { TaskResponseInterface } from '../../services/task-response.interface';
import moment from 'moment';

const Favorites = () => {
  	const favorites: TaskResponseInterface[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  	return (
    	<div className="flex flex-col items-center w-full mt-10">
     	 <h1 className="text-3xl font-bold mb-6 text-RED-600">PREFERRED TASKs</h1>
      	<div className="w-3/4 bg-pink-100  p-6">
        	{favorites.length !== 0 ? (
          	favorites.map((task) => (
            						<div key={task.id} className="flex justify-between items-center border-b py-2">
              						<div className="text-pink-700 text-lg font-semibold">
                						{task.title}
              						</div>
             							 <div className="text-red-500 text-sm ">
               						 <span className='mr-2'>{moment(task.dueDate).format('Do MMM YYYY')}</span>
              								</div>
           							 </div>
          					))
        				) : (
          					<div className="flex justify-center text-red-500 text-lg font-semibold">
            NO FAVORITE TASKS!
          					</div>
       				 )}
      			</div>
    		</div>
 	 );
};

export default Favorites;
