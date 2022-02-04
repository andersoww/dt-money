import ReactModal from "react-modal";
import closeImg from '../../assets/close.svg';
import { Container } from "./styles";

interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void; 
}

export function NewTransactionModal ({isOpen,onRequestClose}:NewTransactionModal){
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

            <Container>
                <h2>Cadastrar Transação</h2>

                <input type="text" placeholder="Título"/>
                <input type="number" placeholder="Valor"/>
                <input type="text" placeholder="Categoria"/>

                <button type="submit">Cadastrar</button>
            </Container>
            
        </ReactModal>
    );
}