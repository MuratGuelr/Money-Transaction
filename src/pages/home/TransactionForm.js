import { useEffect, useRef, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
const [name, setName] = useState('') 
const [amount, setAmount] = useState('') 
const { addDocument, response } = useFirestore('transactions')

const formInput = useRef()


const handleSubmit = (e) => {
    e.preventDefault()

    addDocument({
        uid,
        name,
        amount
    });
    formInput.current.reset()
}


  return <>
        <h3>Add a Transaction</h3>
        <form onSubmit={handleSubmit} ref={formInput}>

            <label>
                <span>Transaction Name:</span>
                <input 
                type="text"
                required
                onChange={(e) => setName(e.target.value)} 
                />
            </label>

            <label>
                <span>Transaction amount: (₺)</span>
                <input 
                type="number"
                required
                onChange={(e) => setAmount(e.target.value)} 
                />
            </label>

            <button>Add Transaction</button>

        </form>
  </>;
}
