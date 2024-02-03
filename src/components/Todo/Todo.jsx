import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, EditButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo } from 'store/todoReducer';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(removeTodo(id));
  };

  const handleEdit = id => {
    const newText = prompt('Please input new text for task');
    dispatch(
      editTodo({
        id,
        text: newText,
      }),
    );
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => handleDelete(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <EditButton type="button" onClick={() => handleEdit(id)}>
          <RiEdit2Line size={24} />
        </EditButton>
      </TodoWrapper>
    </>
  );
};
