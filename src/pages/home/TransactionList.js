import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'


export default function TransactionList({transactions}) {
    const { deleteDocument, response } = useFirestore('transactions')
    console.log(response);
    
    const transactionAmountArray = []

    transactions.map((transaction) => {
        transactionAmountArray.push(Number(transaction.amount))
    })

    const totalAmount =  transactionAmountArray.reduce((acu,transactionAmountArray) => acu + transactionAmountArray, 0 )


 

  return <div>
    <ul className={styles.transactions}>

    <span className={styles.totalAmount}>Total Amount: {totalAmount}₺</span>
    
        {transactions.map((transaction) => (
            <li key={transaction.id}>
                <p className={styles.name}>{transaction.name}</p>
                <p className={styles.amount}>{transaction.amount}₺</p>
                <button onClick={() => deleteDocument(transaction.id)}>x</button>
            </li>
        ))}
    </ul>
  </div>;
}
