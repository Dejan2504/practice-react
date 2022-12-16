import {useDispatch, useSelector} from 'react-redux';
import { messageAction } from '../store/messageSlice';

const Message = function(){
    const dispatch = useDispatch();
    const message = useSelector(state => state.message)

    const toogleVisible = function(){
        dispatch(messageAction.isShown());
    }
return(
    <div>
    {message.isShown ? <p>Hello Redux!</p> : ''}
    <button onClick={toogleVisible}>Toggle</button>
    </div>
)

}

export default Message;