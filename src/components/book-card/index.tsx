import { useState } from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }:any) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg flex-2 w-80 m-1`} onClick={()=>setIsSelected(!isSelected)}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.title}</div>
        <p className="text-gray-700 text-base">
          {book.authorName?.join(',')}
        </p>
        <br />
        <Link to={`/book${book.key}`}>Go to book</Link>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {book.firstPublishYear}
        </span>
      </div>
    </div>
  );
}
