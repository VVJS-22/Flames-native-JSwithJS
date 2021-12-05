import React from 'react'
import { FlamesProvider } from './flamesStore'

const Store = ({children}) => {
    return (
        <FlamesProvider>
            {children}
        </FlamesProvider>
    )
}

export default Store
