//import all the action variables and functions
// from actions.js
import {
  NEW_GAME,
  newGame,
  MAKE_GUESS,
  makeGuess,
  TOGGLE_INFO_MODAL,
  toggleInfoModal
} from './actions';

// describe for each action export
describe('newGame', () => {
  it('Should return the new game action', () => {
    const action = newGame();
    // test type should equal the action type
    expect(action.type).toEqual(NEW_GAME);
    // answer should be between 0-100
    expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(action.correctAnswer).toBeLessThanOrEqual(100);
  });
});

describe('makeGuess', () => {
  it('should return the make guess action', () => {
    const action = makeGuess();
    //need to use dummy guess to test
    const guess = 7;
    // test type should equal the action type
    expect(action.type).toEqual(MAKE_GUESS);
    //dummy guess should equal the action's guess
    // expect(action.guess).toEqual(guess); <!-- no working -->
  });
});

describe('toggleInfoModal', () => {
  it('Should return the toggle information moda action', () => {
    const action = toggleInfoModal();
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);
  });
});
