import {useState} from "react";
import Books from './bookList';

const EachBook = () => {
const [books] = useState ([
 {title: 'Great worriors', author: 'Gasangwa', id: 1 },
 {title: 'African child', author: 'Thomson', id: 2 },
 {title: 'Wisdom is power', author: 'Gasanna', id: 3 }
]);
    return (
      <div className="book">
          <Books books={books}/>
      </div>
    );
  }
  
  export default EachBook;