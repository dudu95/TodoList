import React from 'react';


class TodoHeader extends React.Component {


	handleEvent(e){
		let value = e.target.value
		if(e.keyCode==13){
			if(value==''){
				return false
			}
			this.props.addTodo({
			    value: value,
			    isDone: false
			})
			//清空输入框
			e.target.value = ''
		}
	}

	render(){
        return (
	        <div className="todo-header">
	  	    	<input type="text" onKeyUp={this.handleEvent.bind(this)} placeholder="请输入任务" />
	        </div>
	     )
	}
}

export default TodoHeader