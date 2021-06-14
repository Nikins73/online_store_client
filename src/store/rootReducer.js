import userReducer from "./userReducer";
import devicesReducer from "./devicesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  devices: devicesReducer,
});

export default rootReducer;
