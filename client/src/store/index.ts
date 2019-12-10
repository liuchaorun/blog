import { createStore, combineReducers } from "redux";

import { articleReducer } from "./article/reducers";

const rootReducer = combineReducers({
    article: articleReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(
        rootReducer,
    );

    return store;
}
