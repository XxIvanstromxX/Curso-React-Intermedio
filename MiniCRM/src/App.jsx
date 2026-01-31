import MainLayout from './components/layout/MainLayout';
import ClientsPage from './pages/ClientsPage';
import { ClientsProvider } from './context/ClientsContext';

function App() {
  return (
    <ClientsProvider>
      <MainLayout>
        <ClientsPage />
      </MainLayout>
    </ClientsProvider>
  );
}

export default App;
