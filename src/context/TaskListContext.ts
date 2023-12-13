import { createContext, Dispatch, SetStateAction } from 'react';
import { TaskResponseInterface } from '../services/task-response.interface';

export interface TaskListContextInterface {
    taskList: TaskResponseInterface[]
    sortArrow: boolean;
    sortTasks(): void;
    searchInput: string;
    setSearchInput: Dispatch<SetStateAction<string>> | undefined;
    searchTasks: TaskResponseInterface[] | undefined;
    handleDeleteTask(id: string | undefined): void | undefined;
}

export const TaskListContext = createContext<TaskListContextInterface>({
	sortArrow: false,
	sortTasks: () => {},
	searchInput: '',
	setSearchInput: undefined,
	searchTasks: undefined,
	handleDeleteTask: () => {},
	taskList: []
});