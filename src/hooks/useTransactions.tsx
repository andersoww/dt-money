import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionProps {
    id: number;
    title: string;
    createdAt: Date;
    amount: number;
    category: string;
    type: string;
}
interface TransactionsProviderProps{
    children:ReactNode;
}

/* Tipagem que usa uma interface como refência para usar os atributos com excessões */
type TransactionsInput = Omit<TransactionProps , 'id' | 'createdAt'>

interface TransactionsContextData {
    transactions:TransactionProps[];
    createTransaction: (transaction:TransactionsInput) => Promise<void>;
}
const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );

export function TransactionsProvider({children}:TransactionsProviderProps) {
    const [transactions,setTransactions] = useState<TransactionProps[]>([]);

    useEffect(()=> {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    },[]);
    /* Função para Adicionar uma Transação na API  */
    async function createTransaction (transactionsInput:TransactionsInput){
        
        const response = await api.post('/transactions',{
            ...transactionsInput,
            createdAt:new Date(),
        });
        const {transaction} = response.data;

        setTransactions([
            ...transactions,
            transaction
        ])

    }
    /* Compartilhamos os Estados, Função, Hooks e etc.Para os Componentes Filhos  */
    return (
      <TransactionsContext.Provider value={{transactions, createTransaction}}>
          {children}
      </TransactionsContext.Provider>
    );
}

export function useTransactions (){
    const context = useContext(TransactionsContext);

    return context;
}