import React, { Component } from 'react'
import { toast } from 'react-toastify';
import { addTransaction } from '../util/transaction';

class AddIncome extends Component{
    constructor(props){
        super(props);
        this.state = {
            txt : "",
            amount: 0
        }
    }

     getText(e){
        //console.log(e.target)  //whole input tag
        this.setState({
            txt: e.target.value //value attribute
        })
     }

     getAmount(e){
        this.setState({
            amount:e.target.value
        })
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
                txt: this.state.txt,
                amount: this.state.amount
            };
            console.log('income = ',data)
            addTransaction(data);
            this.clearForm()
            toast.success(" Income Successfully Added")
            window.location.href = "/"
        } catch (err) {
            toast.error(err.message)
        }
     }
    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)} autoComplete={'off'}>
                    <fieldset>
                        <legend className='plus'>Add Income</legend>
                        <div className="form-control">
                            <label htmlFor="txt">Text</label>
                            <input type="text" name="txt" value={this.state.txt} onChange={(e) =>this.getText(e)} id="txt" className="form-input" placeholder="Enter Text.." required/>
                        </div>

                        <div className="form-control"> 
                            <label htmlFor="amount">+Amount</label>
                            <input type="number" name="amount" className="form-input" id="amount" value={this.state.amount} onChange={this.getAmount.bind(this)} placeholder="Enter Amount.." required/>
                        </div>
                        
                        <div className="form-control">
                            <input type="submit" value="Add Transaction" className="btn btn-income"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
 export default AddIncome