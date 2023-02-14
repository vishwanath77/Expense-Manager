import React, { Component } from "react"
import { toast } from 'react-toastify';
import { addTransaction } from "../util/transaction";

class AddExpense extends Component{
    constructor(props){
        super(props);
        this.state ={
            txt:"",
            amount:0
        }
    }

    //clearing form inputs
    clearForm() {
        this.setState({
            txt:"",
            amount:0
        })
     }


    submitHandler(e){
        e.preventDefault();
        try {
            const data ={
                txt:this.state.txt,
                amount:this.state.amount
            };
            console.log('expense =', data)
            addTransaction(data);
            this.clearForm()
            toast.success("Expense Successfully added")
            window.location.href = "/"
        }catch(err){
            toast.error(err.message)
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <fieldset>
                        <legend className="minus">Add Expense</legend>
                        <div className="form-control">
                            <label htmlFor="txt">Text</label>
                            <input type="text" name="txt" value={this.state.txt} onChange={(e) =>this.setState({
                                txt:e.target.value
                            })} className="form-input" placeholder="Enter Text.." required id="txt"/>
                        </div>

                        <div className="form-control"> 
                            <label htmlFor="amount">-Amount</label>
                            <input type="number" name="amount" className="form-input" id="amount" value={this.state.amount} onChange={(e)=>this.setState({
                                amount:e.target.value
                            })} placeholder="Enter Amount.." required/>
                        </div>
                        
                        <div className="form-control">
                            <input type="submit" value="Add Transaction" className="btn btn-expense"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
 export default AddExpense