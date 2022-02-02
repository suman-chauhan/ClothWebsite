import { combineReducers } from "redux";
import { productReducer , selectProductReducer} from "./productReducers";

const reducers = combineReducers({
  allproducts: productReducer,
  product : selectProductReducer,
  
});

export default reducers;
