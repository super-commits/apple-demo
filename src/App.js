import Apple from './components/Apple/Apple'
import { RootStore, RootStoreProvider } from './stores/RootStore';

const rootStore = new RootStore()

function App() {
  return (
    <RootStoreProvider store={rootStore}>
      <Apple />
    </RootStoreProvider>
  );
}

export default App;
