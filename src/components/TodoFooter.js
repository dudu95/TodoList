import React from 'react'

class TodoFooter extends React.Component {

	handlerSelectAll(e){
		let isDone = e.target.checked
		this.props.changeTodoState(null,isDone,true)
	}

	handlerDeleteDone(){
		this.props.clearIsDone()
	}

	render(){
return(
		<div className="todo-footer">
            <label>
                <input type="checkbox" checked={this.props.isAllChecked} onChange={this.handlerSelectAll.bind(this)} />全选
            </label>
            <span><span className="text-success">已完成{this.props.todoDoneCount}</span> / 全部{this.props.todoCount}</span>
            <button className="btn btn-danger" onClick={this.handlerDeleteDone.bind(this)}>清除已完成任务</button>
        </div>
)
	}
}

export default TodoFooter