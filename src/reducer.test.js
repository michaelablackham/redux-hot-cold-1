//need to import reducers and actions from both files
import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

//wrap the entire reducer test within one describe fuction
// beacause there is only one export in reducers.js
describe('Reducer', () => {
  it('should set the initital state as default for empty info', () =>{
    const state = reducer(undefined, {type: '__UNKNOWN'});

    //guesses should equal an empty array
    expect(state.guesses).toEqual([]);
    // feedback should equal 'Make your guess!'
    expect(state.feedback).toEqual('Make your guess!');
    //correct answer should equal >0 && <100
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    // show info modal should be === false
    expect(state.showInfoModal).toEqual(false);
  });
});
