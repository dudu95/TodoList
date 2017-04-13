import React from 'react'

class TodoItem extends React.Component {
	handlerChange(){
		this.props.isDone = !this.props.isDone
		this.props.changeTodoState(this.props.index,this.props.isDone)
	}

	handlerDelete(){
		this.props.deleteTodo(this.props.index)
	}

	// 鼠标移入事件
    handlerMouseEnter() {
        React.findDOMNode(this).style.background = '#eee';
        React.findDOMNode(this.refs.list).style.display = 'inline-block';
    }
    handlerMouseLeave() {
        React.findDOMNode(this).style.background = '#fff';
        React.findDOMNode(this.refs.list).style.display = 'none';
    }

	render(){
		let className = this.props.isDone ? 'task-done' : '';
		return (
			<li onMouseEnter={this.handlerMouseEnter.bind(this)} onMouseLeave={this.handlerMouseLeave.bind(this)}>
				<label>
                <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)} />
                <span className={className}>{this.props.text}</span>
                </label>
                <button ref="list" className="btn btn-danger" onClick={this.handlerDelete.bind(this)}>删除</button>
			</li>
		)
	}
}

export default TodoItem