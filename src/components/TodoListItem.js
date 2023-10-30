import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

function TodoListItem(props){
    console.log(props.todo);

    const {id, text, checked} = props.todo;

    return(
        <div className = "TodoListItem">
            <div className = {cn('checkbox', {checked})} onClick={()=>{props.onToggle(id)}}>
                {
                   checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> 
                }
                <div className = "text">{text}</div>
            </div>
           
            <div className='remove' onClick= {()=>props.onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListItem;