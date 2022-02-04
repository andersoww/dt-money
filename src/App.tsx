import { useState } from 'react';
import ReactModal from 'react-modal';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

ReactModal.setAppElement('#root');
function App() {
  const [isNewTransactionModalOpen,setIsNewTransactioModalOpen] = useState(false);

    function handleOpenNewTransactionModal (){
        setIsNewTransactioModalOpen(true)
    }

    function handleCloseNewTransactionModal (){
        setIsNewTransactioModalOpen(false)
    }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
