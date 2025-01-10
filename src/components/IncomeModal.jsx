import React,{useState} from 'react'
import Modal from "react-modal"

function IncomeModal({isOpen, onClose, addIncome}) {
const [amount, setAmount]= useState("");
const [error, setError]= useState("");

const handleSubmit=(e)=>{
e.preventDefault();
if(!amount || amount<=0 || isNaN(amount)  ){
  setError ("Enter a valid amount");
  return;
}
addIncome(parseFloat(amount));
setError("");
setAmount("");
onClose();
};

const handleInputChange=(e)=>{
  const value= e.target.value;
  setAmount(value);
  if(value && !isNaN(value) && parseFloat(value)>0){
    setError("");
  }
};

  return (
    <div>
      <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      >
        <h2>Add Balance</h2>
        <form onSubmit={handleSubmit} className='incomeForm'>
        {error && <div>{error}</div>}
        <input type="number" placeholder='Income Amount' value={amount} onChange={handleInputChange} required/>
        <button>Add Balance</button>
        <button>Cancel</button>
        </form>
      </Modal>
    </div>
  )
}

export default IncomeModal
