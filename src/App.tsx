import { useState } from 'react';
import ReactModal from 'react-modal';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import {TransactionsProvider } from './hooks/useTransactions';

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
      </TransactionsProvider>
  );
}

export default App;
