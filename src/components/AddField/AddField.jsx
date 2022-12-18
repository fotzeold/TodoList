import { useState } from 'react';

import './add-field.scss';

const AddField = () => {
	const [todo, setTodo] = useState([]);
	const [currTodo, setCurrTodo] = useState('');

	const addCurrTodo = () => {
		const input = document.querySelector('.todo__input');

		setTodo([...todo, currTodo]);
		input.value = '';
	}

	const delCurrTodo = (i) => {
		const temp = todo.filter((e, index) => index !== i);
		setTodo(temp);
	}

	const isChecked = () => {
		const elements = document.querySelectorAll('input[type=checkbox]');
		const wrappers = document.querySelectorAll('.todo__curr');
		console.log(elements)

		elements.forEach((e, i) => {
			if (e.checked) {
				wrappers[i].classList.add('checked')
			} else {
				wrappers[i].classList.remove('checked')
			}
		})
	}

	return (
		<main className='todo'>
			<div className="todo__add">
				<input
					type="text"
					className='todo__input'
					placeholder='Some todo...'
					min="3"
					max="30"
					onChange={e => setCurrTodo(e.target.value)}
				/>
				<button
					type="button"
					onClick={addCurrTodo}
				>Add todo</button>
			</div>
			<div className="todo__list">
				{
					todo.map((e, i) => {
						return (
							<div className="todo__curr" key={i}>
								<span>{e}</span>
								<button onClick={() => delCurrTodo(i)}></button>
								<input
									type="checkbox"
									onClick={isChecked}
								/>
							</div>
						)
					})
				}
			</div>
			<div className="todo__counter">
				<span>You have {todo.length} todo</span>
			</div>
		</main>
	)
}

export default AddField;