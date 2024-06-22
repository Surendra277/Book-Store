import React, { useEffect, useState } from 'react'
import BookCards from '../component/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect( () =>{
        fetch("").then(res =>res.json()).then(data => setBooks)
    },[])
  return (
    <div>
        <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks