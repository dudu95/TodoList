import React from 'react';
import LocalDb from 'localDb';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';
import TodoFooter from './TodoFooter';

class App extends React.Component {
	constructor(){
		super()
		this.db = new LocalDb('ReactDemo')
		this.state = {
			todos: this.db.get('todos')||[],
			isAllChecked: false
		}
	}

// 判断是否所有任务的状态都完成，同步底部的全选框
	allChecked(){
		let isAllChecked = false
		if(this.state.todos.every(todo=>todo.isDone)){
			
			 isAllChecked = true;
		} 
		this.setState({   //改变状态，组件重绘	             
		    todos: this.state.todos,
	        isAllChecked: isAllChecked
	     });
	}

	// 添加任务，是传递给Header组件的方法
	addTodo(todoItem){
		this.state.todos.push(todoItem)
		this.setState({
			todos: this.state.todos
		})
		this.db.set('todos',this.state.todos)
	}

	// 删除当前的任务，传递给TodoItem的方法
	deleteTodo(index){
		this.state.todos.splice(index,1)
		this.setState({
			todos: this.state.todos
		})
		this.db.set('todos',this.state.todos)
	}

	  // 清除已完成的任务，传递给Footer组件的方法
	 clearIsDone(){
	 	let todos = this.state.todos.filter(todo=>!todo.isDone)
	 	this.setState({
			todos: todos,
			isAllChecked: false
		})
		this.db.set('todos',todos)
	 }

	// 改变任务状态，传递给TodoItem和Footer组件的方法  不一定会重绘
	changeTodoState(index,isDone,isAllChecked=false){
		if(isAllChecked){
			this.setState({
				todos: this.state.todos.map(todo=>{
					todo.isDone = isDone
					return todo
				}),
				isAllChecked: isDone
			})
		}else{
			this.state.todos[index].isDone = isDone
			this.allChecked()
		}
		this.db.set('todos',this.state.todos)
	}

	render(){
		let info = {
            isAllChecked: this.state.isAllChecked,
            todoCount: this.state.todos.length || 0,
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo) => todo.isDone)).length || 0
        };
        return (
            <div className="todo-wrap">
                <TodoHeader addTodo={this.addTodo.bind(this)} />
                <TodoMain todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)} />
                <TodoFooter {...info} changeTodoState={this.changeTodoState.bind(this)} clearIsDone={this.clearIsDone.bind(this)} />
            </div>
        );
    }

}

React.render(<App/>, document.getElementById('app'));