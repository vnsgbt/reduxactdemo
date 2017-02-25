
let todoId = 0;

export const addTodoAction = (text) => ({
    type: 'ADD_TODO',
    id: todoId++,
    text
});