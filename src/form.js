
import { React } from 'react';

function Form(props) {
    return (
        <form>
            <input type="text" id="city" placeholder="enter city" 
                    value={this.state.city} onChange={this.handleOnChange}/><br/>
            <button className="button" onClick={this.handleOnClick}>Submit</button>
        </form>
    )
}



export default Form;



