import { createContext, useContext } from 'react'
import AppleStore from './AppleStore/AppleStore'

class RootStore {
  constructor () {
    this.appleStore = new AppleStore()
  }
}

const RootStoreContext = createContext()

const RootStoreProvider = ({ store, children }) => {
  return <RootStoreContext.Provider value={store}>
    {children}
  </RootStoreContext.Provider>
}

const useRootStore = () => {
  return useContext(RootStoreContext)
}

export { RootStore, RootStoreProvider, useRootStore }