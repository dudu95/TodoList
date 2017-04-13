import React from 'react'
import TodoItem from './TodoItem'

class TodoMain extends React.Component {
	

	render(){
		if(this.props.todos.length==0){
			return (
                <div className="todo-empty">恭喜您，目前没有待办任务！</div>
            )
		}else{
			return (
				<ul className="todo-main">
				{
					this.props.todos.map((todo,index)=>{
						return <TodoItem index={index} text={todo.value} isDone={todo.isDone} {...this.props} />
					})
				}
				</ul>
			)
		}
		
	}
}

export default TodoMain