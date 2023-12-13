import {CreateTaskInput, TaskResponseInterface} from './task-response.interface';

const getAllTasks = async (): Promise<TaskResponseInterface[]> => {
	const response = await fetch('https://6547e016902874dff3acd516.mockapi.io/tasks/api/v1/tasks');
	if (!response.ok) {
		throw new Error('Network response was not ok.');
	}

	const data: TaskResponseInterface[] = await response.json();
	return data;
};

const getTaskById = async (id: string | undefined): Promise<TaskResponseInterface> => {
	const response = await fetch(`https://6547e016902874dff3acd516.mockapi.io/tasks/api/v1/tasks/${id}`);
	if (!response.ok) {
		throw new Error('Network response was not ok.');
	}

	const data: TaskResponseInterface = await response.json();
	return data;
};

const deleteTask = async (id: string | undefined): Promise<TaskResponseInterface> => {
	const response = await fetch(`https://6547e016902874dff3acd516.mockapi.io/tasks/api/v1/tasks/${id}`, {
		method: 'DELETE'
	});
	if (!response.ok) {
		throw new Error('Network response was not ok.');
	}
	const responseData: TaskResponseInterface = await response.json();
	return responseData;
};

const createTask = async (data: CreateTaskInput): Promise<TaskResponseInterface> => {
	const response = await fetch('https://6547e016902874dff3acd516.mockapi.io/tasks/api/v1/tasks', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	if (!response.ok) {
		throw new Error('Network response was not ok.');
	}

	const responseData: TaskResponseInterface = await response.json();
	return responseData;
};

export {
	getAllTasks,
	getTaskById,
	deleteTask,
	createTask
};
