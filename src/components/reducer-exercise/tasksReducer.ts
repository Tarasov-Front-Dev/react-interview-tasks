import { Task } from "./typings"

type Action = {
    id: number
    text?: string
    done?: boolean
    task: Task
    type: 'added' | 'changed' | 'deleted'
}

export function tasksReducer(tasks: Task[], action: Action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }]
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task
                } else {
                    return t
                }
            })
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}
