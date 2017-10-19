//need to import reducers and actions from both files
import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

//why do we wrap the entire thing in one describe? when it comes to state?
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

  describe('newGame', () => {
    it('should start new game', () => {
      // fake info to pretend a current game is being played
      let state = {
        guesses: [2,6,9,22],
        feedback: 'coolio!',
        correctAnswer: -1 //Negative do different to new game
        // I needed help with this one here --^
      };
      state = reducer(state, newGame());
      //new game should have no guesses
      expect(state.guesses).toEqual([]);
      //new game feedback should equal 'Make your guess!'
      expect(state.feedback).toEqual('Make your guess!');
      //new game correct answer should equal >0 && <100
      expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(state.correctAnswer).toBeLessThanOrEqual(100);
      // show info modal should be === false
      expect(state.showInfoModal).toEqual(false);
    });
  });

  describe('makeGuess', () => {
    it('should make a guess', () => {
      let state = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: 72
      }

      state = reducer(state, makeGuess(14));
      expect(state.guesses).toEqual([14]);
    });
  });

  describe('toggleInfoModal', () => {
    it('should show info modal', () => {
      //set state to not show it, so we can turn it on
      let state = {
        showInfoModal: false
      };
      state = reducer(state, toggleInfoModal());
      expect(state.showInfoModal).toEqual(true);
    });

    it('should hide info modal', () => {
      let state = {
        showInfoModal: true
      };
      state = reducer(state, toggleInfoModal());
      expect(state.showInfoModal).toEqual(false);
    });
  });
});
