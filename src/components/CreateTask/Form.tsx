import React, {FC} from 'react';
import {CreateTaskFormProps} from '../../services/task-response.interface';

const Form: FC<CreateTaskFormProps> = ({
	title,
	description,
	setDescription,
	setTitle,
	handleCreateTask,
	dueDate,
	setDueDate
}) => {
	return (
		<div className="flex justify-center" style={{zIndex: 1}}>
			<div className="flex flex-col mt-4 px-8 sm:px-12 shadow-xl rounded-xl w-full sm:w-[640px] lg:w-[600px] p-4">
				<div className="flex justify-center text-pink-600 text-3xl font-bold">
					<h1>CREATE TASK</h1>
				</div>
				<form onSubmit={handleCreateTask} className="flex flex-col mt-3 w-full">
					<div className="mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900">TITLE</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="border text-pink-950 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-0"
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900">DESCRIPTION</label>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="border text-pink-950 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-0"
						/>
					</div>
					<div className="mb-16">
						<label className="block mb-2 text-sm font-medium text-gray-900">DATE LIMIT</label>
						<input
							type="date"
							value={dueDate}
							onChange={(e) => setDueDate(e.target.value)}
							className="border text-pink-950 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-0"
						/>
					</div>
					<div className="flex justify-end ">
						<button
							type='submit'
							className="mx-auto block w-40 rounded-full px-4 py-2 bg-pink-500 text-white border hover:bg-amber-500 transition duration-500 font-bold mt-[-40]">
                            SEND
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;