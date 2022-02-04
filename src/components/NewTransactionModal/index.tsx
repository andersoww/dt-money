import { FormEvent, useState } from "react";
import ReactModal from "react-modal";
import closeImg from '../../assets/close.svg';
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from  '../../assets/income.svg';
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { api } from "../../services/api";


interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void; 
    
}

export function NewTransactionModal ({isOpen,onRequestClose}:NewTransactionModal){
    const [title,setTitle] = useState('')
    const [value, setValue] =useState(0)
    const [category,setCategory] =useState('')
    const [type,setType] = useState('')

    function handleCreateNewTransaction (event:FormEvent){
        event.preventDefault()
        const data ={
            title,
            value,
            category,
            type
        }
        api.post('/transactions',data)
    }
    return (
        <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >
            <button 
            type="button" 
            onClick={onRequestClose}
            className="react-modal-close"
            >
                <img src={closeImg} alt="" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input 
                type="text" 
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
                />

                <input 
                type="number" 
                placeholder="Valor"
                value={value}
                onChange={event => setValue(Number(event.target.value))}
                />
                
                <TransactionTypeContainer>
                    <RadioBox 
                    onClick={()=> setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor="green"
                    type="button"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                    onClick={()=> setType('withdraw')}
                    isActive = {type === 'withdraw'}
                    activeColor="red"
                    type="button"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input 
                type="text" 
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
            
        </ReactModal>
    );
}