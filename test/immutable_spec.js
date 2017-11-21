import {expect} from 'chai';
import {List} from 'immutable';

describe('immutability', () => {
    function addMovie(currentState, movie) {
        // it returns a NEW LIST that is a combination of
        // current state with new movie.
        return currentState.push(movie);
    }

    it('is immutable', () => {
        let state = List.of('Trainspotting', '28 Days Later');
        let nextState = addMovie(state, 'Sunshine');

        // next state should be a new list
        expect(nexState).to.equal(List.of('Trainspotting', '28 Days Later', 'Sunshine'));
        // old state should remain the same.
        expect(state).to.equal(List.of('Trainspotting', '28 Days Later'));
    });

});