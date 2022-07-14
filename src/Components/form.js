import React from "react";

function Form() {
    return (
      <div className="add-form">
       <form method="POST" className="form1">
       <lebel>ADD NEW BOOK</lebel><br/>
         <input  type="text" placeholder="Book title" /><br/>
         <input  type="text" placeholder="Author" /><br/>
         <button type="submit">Check status</button>
       </form>
      </div>
    );
  }
  
  export default Form;