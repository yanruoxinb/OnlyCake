import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import { addTodo } from '../actions';

const mapStateToProps = (state)=> (state);
const mapDispatchToProps = (dispatch)=> ({
  addTodo: (arr)=> {
    dispatch(addTodo(arr));
  }
});

var connect2 = connect(mapStateToProps, mapDispatchToProps);
const AddTodo = connect2(SignUp);

export default AddTodo;
