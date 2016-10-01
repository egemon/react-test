import store from ".//store";
import config from "../config";
import assert from "assert";
describe("Store", () => {

  describe("counter", () => {
    let state;
    beforeEach(() => {
      state = JSON.parse(JSON.stringify(config.GAME));
    });

    afterEach(() => {
    });

    describe("change player fields", () => {
      config.PLAYER_FIELDS.forEach((field) => {

        it(`should change player's ${field}`, () => {
          state.players[0] = {
            [field]: 4
          };
          store.dispatch({
            type: "PLAYER_CHANGE",
            fieldName: field,
            fieldValue: 4,
            number: 0
          });
          assert.deepEqual(store.getState(), state);
        });
      });
    });

    describe("change metadata fields", () => {
      config.METADATA_FIELDS.forEach((field) => {

        it(`should change metadata's ${field}`, () => {
          state.metadata = {
            [field]: 4
          };
          store.dispatch({
            type: "METADATA_CHANGE",
            fieldName: field,
            fieldValue: 4
          });
          assert.deepEqual(store.getState(), state);
        });
      });
    });

  });


});
