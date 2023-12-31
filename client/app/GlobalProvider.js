'use client'
import React from 'react'
import { store } from '../Redux/store'
import { Provider } from 'react-redux'

const GlobalProvider = ({ children }) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default GlobalProvider