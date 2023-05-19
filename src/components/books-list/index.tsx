import BookCard from '../book-card';
import styles from './styles.module.css';

export default function BooksList({ books = []}: any) {
    return (
      <div className={styles.booksList + ' p-12 flex flex-wrap justify-center'}>
        {books.map((book: any) => (<BookCard key={book.key} book={book} />))}
      </div>
    )
}
  