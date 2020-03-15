export const filterBook = (book, searchTerm) => {
  const title = book.hasOwnProperty('title') ? book.title.toLowerCase() : '';
  const authors = book.hasOwnProperty('authors')
    ? book.authors.join(' ').toLowerCase()
    : '';
  const description = book.hasOwnProperty('description')
    ? book.description.toLowerCase()
    : '';

  return (
    title.includes(searchTerm.toLowerCase()) ||
    authors.includes(searchTerm.toLowerCase()) ||
    description.includes(searchTerm.toLowerCase())
  );
};
