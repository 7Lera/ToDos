import React, {useEffect, useState} from 'react';
import {TaskResponseInterface} from '../../services/task-response.interface';
import {useParams} from 'react-router-dom';
import {getTaskById} from '../../services/taskService';
import moment from 'moment/moment';

const TaskBLock = () => {
	const [task, setTask] = useState<TaskResponseInterface>();
	const {id} = useParams();
    
	useEffect(() => {
		getTaskById(id).then((data) => setTask(data));
	},[]);

	return (
		<div className="flex flex-col justify-center items-center w-full p-4">
			<div className="w-full max-w-screen-xl mx-auto border rounded-lg bg-pink-900 text-white">
				<div className="p-4 rounded-t-lg border-l-4 border-pink-300 transition-all duration-300 hover:rounded-lg text-center">
					<p className="text-red-600 font-bold text-3xl ">{task?.title}</p>
				</div>
				<div className="mt-2 text-xl text-white font-semibold text-center">
					<p>{task?.description}</p>
				</div>
				<div className="flex justify-between items-center w-full mt-2 text-pink-400 text-sm p-4">
					<p>Created at: {moment(task?.createdAt).format('Do MMM YYYY')}</p>
            	<p>Date limit: {moment(task?.dueDate).format('Do MMM YYYY')}</p>
				</div>
			</div>
		</div>
	);
};

export default TaskBLock;