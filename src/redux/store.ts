import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import themeReducer from '../features/Theme/themeSlice'
import { postsReducer } from '../features/posts'
import { authReducer } from '../features/auth'

import { singUpSaga } from '../sagas/singUpSagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        posts: postsReducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(sagaMiddleware)
    }
})

sagaMiddleware.run(singUpSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch