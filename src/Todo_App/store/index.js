import {createStore} from 'redux';

function reducer(state, action) {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                inputValue: action.payload,
            };

        case 'INPUT_CLEAR':
            return {
                ...state,
                inputValue: '',
            };

        case 'TASK_ADD':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ],
            };

        case 'TASK_DELETE':
            return {
                ...state,
                todos: state.todos.filter((task ,index) => {
                    return index !== action.payload;
                }),
            };

        case 'TASK_EDIT':
            return {
                ...state,
                inputValue: action.payload1,
                todos: state.todos.map((task, index) => {
                    if (index === action.payload2) {
                        task.editing = true;
                    }

                    return task;
                }),
            };

        case 'TASK_UPDATE':
            return {
                ...state,
                todos: state.todos.map(task => {
                    if (task.editing === true) {
                        task = action.payload;
                    }

                    return task;
                }),
            };

        case 'CHECKBOX_TOGGLE':
            return {
                ...state,
                todos: state.todos.map((task, index) => {
                    if (index === action.payload) {
                        task.finished = !task.finished;
                    }

                    return task;
                }),
            };

        default:
            return state;
    }
}

const store = createStore(reducer, {
    inputValue: '',
    todos: [
        {
            text: 'Play PUBG',
            finished: true,
            editing: false,
        },
        {
            text: 'Eat a cookie',
            finished: false,
            editing: false,
        },
        {
            text: 'Go to sleep',
            finished: false,
            editing: false,
        },
        {
            text: 'Start your own business, become successful and travel to the Maldives',
            finished: false,
            editing: false,
        },
    ],
});

export default store;