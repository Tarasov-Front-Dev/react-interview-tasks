import { createContext, FormEvent, FunctionComponent, useContext, useRef, useState } from "react"

type Todo = {
    id: number
    text: string
}

type TodoContextProps = {
    handleRemove: (todoId: number) => void
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined)

export const Todos: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const onSubmit = (todo: Todo) => {
        setTodos([todo, ...todos])
    }

    const handleRemove = (todoId: number) => {
        setTodos(todos => todos.filter(({ id }) => todoId !== id))
    }

    return (
        <>
            <TodoContext.Provider value={{ handleRemove }}>
                <NewTodo onSubmit={onSubmit} />
                <TodoList todos={todos} />
            </TodoContext.Provider>
        </>
    )
}

enum TT {
    TODO_TEXT = 'todo-text'
}

type NewTodoProps = {
    onSubmit: (todo: Todo) => void
}

type FormDataProps = Record<TT, FormDataEntryValue>

const NewTodo: FunctionComponent<NewTodoProps> = ({ onSubmit }) => {
    const todoTextRef = useRef<HTMLInputElement>(null)

    const createTodo = (formData: FormDataProps) => (
        { id: Date.now(), text: formData["todo-text"] }
    ) as Todo

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const formData = [...new FormData(form)].reduce(
            (obj, [key, val]) => {
                obj[key as keyof FormDataProps] = val

                return obj
            },
            {} as FormDataProps
        )

        form.reset()
        todoTextRef.current?.focus()

        onSubmit(createTodo(formData))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name={TT.TODO_TEXT} ref={todoTextRef} style={{ border: '1px solid black' }} autoComplete='off' />
            <input type="submit" />
        </form>
    )
}

type TodoListProps = {
    todos: Todo[]
}

const TodoList: FunctionComponent<TodoListProps> = ({ todos }) => {
    const { handleRemove } = useContext(TodoContext) ?? {}

    return (
        todos.map(todo => (
            <div key={todo.id}>
                <TodoComponent todo={todo} />
                <button
                    onClick={() => handleRemove?.(todo.id)}
                >
                    REMOVE
                </button>
            </div>
        ))
    )
}

type TodoComponentProps = {
    todo: Todo
}

const TodoComponent: FunctionComponent<TodoComponentProps> = ({ todo }) => {
    return <span>{todo.text}</span>
}