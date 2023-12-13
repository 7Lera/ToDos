import React, { useContext } from 'react';
import { TaskListContext, TaskListContextInterface } from '../../context/TaskListContext';

const SearchBar = () => {
  	const { searchInput, sortTasks, setSearchInput } = useContext<TaskListContextInterface>(
    	TaskListContext
 	 );

  	return (
    	<div className="flex items-center justify-end mt-8 w-full">
      	<div className="mr-4">
       	 {}
       		 <div
         		 onClick={() => sortTasks && sortTasks()} 
          		className="cursor-pointer text-sm text-rose-600 hover:scale-105 transition"
       	 >
          	SORT
        	</div>
      	</div>
      	<div className="relative">
        	<input
          	value={searchInput}
          	placeholder="Cauta dupa titlu"
          	onChange={(e) => setSearchInput && setSearchInput(e.target.value)}
          	className="shadow-xl rounded-lg px-4 py-2 border focus:outline-none focus-visible:ring focus-visible:border-blue-300"
          	style={{ maxWidth: '200px' }}
        	/>
      	</div>
    	</div>
  	);
};

export default SearchBar;
