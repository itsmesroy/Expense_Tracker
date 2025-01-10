import { useState } from "react";
import "./App.css";
import IncomeModal from "./components/IncomeModal.jsx"
import ExpenseModal from "./components/ExpenseModal.jsx"

function App() {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
  const [isDeleteExpenseModalOpen, setIsDeleteExpenseModalOpen] =useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState([]);
  const [expenseToDelete, setExpenseToDelete] = useState([]);

  const openIncomeModal = () => setIsIncomeModalOpen(true);
  const closeIncomeModal = () => setIsIncomeModalOpen(false);

  const openExpenseModal = () => setIsExpenseModalOpen(true);
  const closeExpenseModal = () => setIsExpenseModalOpen(false);

  const openEditExpenseModal = (expense) => {
    setExpenseToEdit(expense);
    openExpenseModal();
  };
  const closeEditExpenseModal = () => {
    closeExpenseModal();
    setExpenseToEdit(null);
  };
  const openDeleteExpenseModal = (expenseId) => {
    setIsDeleteExpenseModalOpen(true);
    setExpenseToDelete(expenseId);
  };
  const closeDeleteExpenseModal = () => {
    setIsDeleteExpenseModalOpen(false);
  };
  const addIncome = (amount) => {
    const newWalletBalance = walletBalance + amount;
    setWalletBalance(newWalletBalance);
    localStorage.setItem("WalletBalance", newWalletBalance);
  };
  const editIncome = () => {};
  return (
    <div className="App">
      <div className="Container">
        <h2>Expense Tracker</h2>

        <div className="row align-items-center ">
          <div className="col-md-6 text-start">
            <div className="wallet-balance">
              <h2>
                <div>Wallet Balance:</div> ₹ {walletBalance}
              </h2>
              <button
                className="button"
                type="button"
                style={{
                  background:
                    "linear-gradient(90deg, #B5DC52 0%, #89E148 100%)",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={openIncomeModal} >
                +Add Income
              </button>
            </div>
          </div>

          <div className="col-md-6 text-start">
            <div className="add-expense">
              <h1>Expenses:</h1>
              <button type="button" onClick={openExpenseModal}style={{  background:
                   "linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",}}>
                +Add Expense
              </button>
            </div>
          </div>


        </div>
      </div>
      <IncomeModal
      isOpen={isIncomeModalOpen}
      onClose={closeIncomeModal}
      addIncome={addIncome}/>
      
      <ExpenseModal
      isOpen={isExpenseModalOpen}
      onClose={closeExpenseModal}/>
    </div>
  );
}

export default App;
