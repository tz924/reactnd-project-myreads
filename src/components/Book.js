import "./Book.scss";
import BookShelfChanger from "./BookShelfChanger";

export default function Book(props) {
  const { title, authors, style } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={style}></div>
        <BookShelfChanger />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}
