import "./search.scss";

// Components
import SearchBooksBar from "../components/SearchBooksBar";

export default function Search(props) {
  return (
    // Search Page
    <div className="search-books">
      <SearchBooksBar />
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
}
