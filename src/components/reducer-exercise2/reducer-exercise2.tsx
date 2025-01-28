import { ChangeEvent, FormEvent, useCallback, useReducer, useState } from "react"
import CheckBox from "./CheckBox"

enum ACTIONS_BY_TYPE {
    ADD = 'add',
    COMPLETE = 'complete',
    REVERT = 'revert',
    REFRESH = 'refresh',
}

type Todo = {
    id: number
    text: string
    isCompleted: boolean
}

type State = Todo[]

type Action = { type: ACTIONS_BY_TYPE, payload: Todo }

interface TodoForm extends HTMLFormElement {
    elements: {
        name: HTMLInputElement
    } & HTMLFormControlsCollection
}

function createTodo(text: string): Todo {
    return { id: Date.now(), text, isCompleted: false }
}

const reducer = (todos: State, action: Action) => {
    switch (action.type) {
        case ACTIONS_BY_TYPE.ADD: {
            return [...todos, action.payload]
        }
        case ACTIONS_BY_TYPE.REVERT:
        case ACTIONS_BY_TYPE.COMPLETE: {
            return todos.map(todo => {
                if (todo.id !== action.payload.id) return todo

                if (action.type === ACTIONS_BY_TYPE.COMPLETE) {
                    todo.isCompleted = true
                } else {
                    todo.isCompleted = false
                }

                return todo
            })
        }
        case ACTIONS_BY_TYPE.REFRESH: {
            return [] as Todo[]
        }
        default:
            return todos
    }
}

export const ReducerExercise2 = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [state, setState] = useState({ name: '', checkbox: false })

    const handleSubmit = (e: FormEvent<TodoForm>) => {
        e.preventDefault()

        const name = e.currentTarget.elements.name

        if (!name) return

        dispatch({ type: ACTIONS_BY_TYPE.ADD, payload: createTodo(name.value) })
        name.value = ''
        setState({ ...state, name: '' })
    }

    const handleToggleTodo = (todo: Todo) => {
        const type = todo.isCompleted ? ACTIONS_BY_TYPE.REVERT : ACTIONS_BY_TYPE.COMPLETE
        dispatch({ type, payload: todo })
    }

    const handleRefreshTodos = () => {
        dispatch({ type: ACTIONS_BY_TYPE.REFRESH, payload: {} as Todo })
    }

    const onFieldChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        let value = e.target.value

        // @ts-expect-error assigning boolean checked value to string input value
        if (e.target.type === 'checkbox') value = e.target.checked

        setState(state => ({ ...state, [name]: value }))
    },
        []
    )

    return (
        <section className="flex w-fit flex-col gap-2">
            <form onSubmit={handleSubmit}>
                <input
                    name='name'
                    onChange={onFieldChange}
                    className="border"
                />
            </form>
            <ol>
                {todos.map(todo => (
                    <li
                        className="p-2 hover:cursor-pointer hover:bg-fuchsia-200"
                        key={todo.id}
                        onClick={() => handleToggleTodo(todo)}
                    >   {
                            todo.isCompleted ? (
                                <del className="select-none text-slate-400">{todo.text}</del>
                            ) : (
                                <span className="select-none">{todo.text}</span>
                            )
                        }
                    </li>
                ))}
            </ol>
            <button
                className="select-none border hover:bg-slate-300"
                onClick={handleRefreshTodos}
            >Refresh List</button>
            <CheckBox
                checked={state.checkbox}
                onChange={onFieldChange}
            />
        </section>
    )
}
