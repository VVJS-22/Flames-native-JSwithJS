import React, { createContext, useContext } from 'react'

const FlamesStore = createContext(null)

export const FlamesProvider = ({children}) => {


    const FlamesStoreValue = ""

    return (
        <FlamesStore.Provider value={FlamesStoreValue}>
            {children}
        </FlamesStore.Provider>
    )
}

export const useFlamesStore = () => {
    return useContext(FlamesStore)
}