import {
  addNewPlayer,
  deletePlayer,
  getPlayers,
  getPlayerWithId,
  updatePlayer
} from "../controllers/playerControllers";

// prettier-ignore
const routes = (app) => {
  app.route("/players")
    .get(getPlayers)        // get all players
    .post(addNewPlayer);    // add a new player

  app.route("/players/:id")
    .delete(deletePlayer)   // delete a specific player
    .get(getPlayerWithId)   // get a specific player
    .put(updatePlayer);     // update a specific player
};

export default routes;
