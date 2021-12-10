import { applyMiddleware, createStore } from "redux";
import reducers from "./reducer";

export type rootState = ReturnType<typeof reducers>;
const store = createStore(reducers, applyMiddleware());
export default store;
