function TodoList(props)
{
    console.log(props);

    return (
        <div>
            <h3>{props.todo.title}</h3>
            
        </div>
    )
}
export default TodoList;