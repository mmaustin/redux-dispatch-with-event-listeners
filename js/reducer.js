let state;
function reducer(state = {count: 2300}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1900}
    default:
      return state;
  }
}

function dispatch(action){
  state = reducer(state, action);
  render();
}

function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}

dispatch({type: '@@INTI'})

let button = document.getElementById('button');

button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})