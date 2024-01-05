import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({ index, text, todos, id, deleteTodo }) => {
  return (
    <>
      {/* <h2>Todo</h2> */}
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{index + 1}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => deleteTodo(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
