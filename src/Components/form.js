import React from "react";

function Form() {
    return (
      <div className="add-form">
       <form method="POST" className="form1">
       <label>ADD NEW BOOK</label>
         <input  type="text" placeholder="Book title" />
         
       </form>
      </div>
    );
  }
  
  export default Form;