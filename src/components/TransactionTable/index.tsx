import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
interface TransactionsProps{
    id:number;
    title:string;
    createdAt:Date;
    amount:number;
    category:string;
    type:string;


}
export function TransactionTable() {
    const [transactions, setTransactions] =useState<TransactionsProps[]>([])
    useEffect(() => {
        api('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transactions => (
                        <tr key={transactions.id}>
                        <td>{transactions.title}</td>
                        <td className={transactions.type}>R${transactions.amount}</td>
                        <td>{transactions.category}</td>
                        <td>{transactions.createdAt}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}