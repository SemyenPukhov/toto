import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeCompleted, completeAll, changeView } from '../../actions/todoActions';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import './styles.css'
import {  MyTheme } from "../../MyTheme";
import { NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// const styles = theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     color: "#FF0000",
//     backgroundColor: theme.palette.background.paper,
//   },
// });

class ToDoApp extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    }
  }

  onChange(inputValue) {
    this.setState({inputValue});
  }

  static onEnter() {
    console.log("onEnter TODO was called");
  }

  callAndClear(value) {
    this.props.addTodo(value);
    this.setState({inputValue: ""});
  }

  render() {
    const {filter, todos} = this.props;
    const { inputValue } = this.state;
    const list = todos.filter((item) => (filter === 'ALL' || ((filter === 'ACTIVE') !== item.completed)));

    // const { classes } = this.props;

    return (
      <div className="todo-container">

        <div className="input-wrapper"> {/*buttons-wrapper*/}
          <Input value={inputValue} style={{fontSize: 15}} onChange={(v) => this.onChange(v.target.value)} />
          <div className="custom-button"><Button style={MyTheme.palette.allButtons} variant="extendedFab" onClick={() => {this.callAndClear(inputValue)}}>Add ToDo</Button></div>
        </div>

        <div className="controls-wrapper"> {/*buttons-wrapper*/}
          <Button style={MyTheme.palette.allButtons} variant="contained" onClick={() => this.props.removeCompleted()}>Remove Completed</Button>
          <Button style={MyTheme.palette.allButtons} variant="contained" onClick={() => this.props.completeAll()}>Complete All</Button>
        </div>

        {/*<ul className="todo-list">*/}
          {/*{list.map((todo) => <li key={todo.id} onClick={() => {this.props.toggleTodo(todo)}} style={{textDecoration: todo.completed ? 'line-through' : 'none', background: !todo.completed ? '#dadada' : '#F0FFF0'}}>{todo.text}</li>)}*/}
        {/*</ul>*/}

        <div className="todo-list"> {/*todo*/}
          <List>
            {list.map((todo) => <ListItem button onClick={() => {this.props.toggleTodo(todo)}} style={{textDecoration: todo.completed ? 'line-through' : 'none', textAlign: 'center'}}><ListItemText primary={todo.text}/></ListItem>)}
          </List>
        </div>
        <div className="view-wrapper"> {/*buttons-wrapper*/}
          <Button  variant="link"  onClick={() => this.props.changeView("ALL")}>All</Button>
          <Button  variant="link"  onClick={() => this.props.changeView("ACTIVE")}>Active</Button>
          <Button  variant="link" onClick={() => this.props.changeView("COMPLETED")}>Completed </Button>
        </div>

      </div>
    );
  }
}
function mapStatesToProps(state) {
  return {
    todos: state.todoReducer.list,
    filter: state.todoReducer.filter,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    toggleTodo: todo => dispatch(toggleTodo(todo)),
    removeCompleted: () => dispatch(removeCompleted()),
    completeAll: () => dispatch(completeAll()),
    changeView: view => dispatch(changeView(view)),
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(ToDoApp);

