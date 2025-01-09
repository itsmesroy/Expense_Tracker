
import { useState } from 'react';
import './App.css';

function App() {

const [walletBalamce, setWalletBalance]=useState(5000);
const [expenses, setExpenses]=useState([])
const [isExpenseModalOpen, setIsExpenseModalOpen]=useState(false);
const [isIncomeModalOpen, setIsIncomeModalOpen]=useState(false);
const [isDeleteExpenseModalOpen, setIsDeleteExpenseModalOpen]=useState(false);
const [expenseToEdit, setExpenseToEdit]=useState([]);
const [expenseToDelete, setExpenseToDelete]=useState([]);

const openIncomeModal=()=> setIsIncomeModalOpen(true);
const closeIncomeModal=()=> setIsIncomeModalOpen(false);

const openExpenseModal=()=> setIsExpenseModalOpen(true);
const closeExpenseModal=()=> setIsExpenseModalOpen(false);

return (
    <div className="App">
      <div className='Container'>
        <h2>Expense Tracker</h2>

        <div className='row align-items-center '>

        <div className='col-md-6 text-start'>
        <div className='wallet-balance'>
          <h1>Wallet Balance:</h1>
          <button className='button' style={{backgroundColor:"#7fff00"}}>+ Add Income</button>
        </div>
        </div>
        
        <div className='col-md-6 text-start'>
        <div className='add-expense'>
          <h1>Expenses:</h1>
          <button className='button' style={{backgroundColor:"#ff0028"}}>+ Add Expense</button>
        </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
