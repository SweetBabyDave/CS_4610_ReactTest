import { useEffect, useState } from "react"

export const Question9 = () => {

  type Todo = {
    id: number;
    content: string;
    isCompleted: boolean;
  }

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/todos').then((res) => {
      res.text().then((data) => {
        const response = JSON.parse(data);
        setTodos(response.todos);
      })
    })
  }, [todos]);

  // for post
const postToDB = (yourPayload : Todo) => {
  fetch("http://localhost:8000/todos", {
  method: "post",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(yourPayload)
});
}


const putToDB = (yourPayload: Todo) => { 
  fetch(`http://localhost:8000/todos/` + yourPayload.id, {
  method: "put",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(yourPayload)
});
}

  const saveTodo = () => {  
    postToDB({
      id: todos.length + 1,
      content: todo,
      isCompleted: false
    })
    setTodos([...todos,
    {
      id: todos.length + 1,
      content: todo,
      isCompleted: false
    }]);
    setTodo("");
  }

  const markComplete = (todo: Todo) => {
    putToDB({
      id: todo.id,
      content: todo.content,
      isCompleted: !todo.isCompleted
    });
  }

  return (
    <section className="question">
      <h2>Question 9</h2>
      <div className="question-content">
        <strong>Instructions</strong>
        <div className="question-instructions">
          This is the final and hardest question! It involves both client and server. You are to build
          me a simple todo list application, complete with a database. Your application should meet the following requirements.
          <ol>
            <li>Provide me with a input where I can type my todo item.</li>
            <li>Provide me with a save button</li>
            <li>
              When I push the save button it should make a post request to the server and save the todo in your database
              <ol type="a">
                <li>
                  A todo has the following shape
<pre>{
`type Todo = {
  id: number;
  content: string;
  isCompleted: boolean;
}`
}</pre>
                </li>
                <li>You will need to add the model to your database and create a migration for it</li>
              </ol>
            </li>
            <li>The newly created todo should be displayed in a list on the screen</li>
            <li>When the page loads you should make a get request to the server to get all of the todos and display them in a list</li>
            <li>Each todo in the list should have a checkbox</li>
            <li>When I check the checkbox you should make a put request to update the isCompleted attribute of the todo item</li>
          </ol>
          <div>
            The server will be running on port 8000 so you will need to make the request to localhost:8000 like so
<pre>{
`fetch('http://localhost:8000/todos')`
}</pre>
            For the post and put requests remember to set the content type to application/json and to stringify the body like
<pre>{
`// for post
fetch("http://localhost:8000/todos", {
  method: "post"
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(yourPayload)
});

// for put (to update todo with id 1)
fetch("http://localhost:8000/todos/1", {
  method: "put"
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(yourPayload)
});
`
}</pre>
          You will not need to worry about authentication for this.
          </div>
        </div>
        <hr />
        <div className="solution-section">
          <input
            type="text"
            value={todo}
            onChange= {e => setTodo(e.target.value)}>
            </input>
            <button onClick={saveTodo}>Save
            </button>
          {todos.map((todo) => {
            return (
              <div>
                {todo.content}
                <input
                key={todo.id}
                type="checkbox"
                defaultChecked={todo.isCompleted}
                onClick={() => markComplete(todo)}>
                </input>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}