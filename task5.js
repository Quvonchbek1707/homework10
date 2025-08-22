const createBookCollection = {
    books: new Map(),
    
    create(book) {
    this.books.set(book.id, book);
    },

    findOne(id) {
    return this.books.get(id) || null;
    },

    findAll(){
    return Array.from(this.books.values());
    },

    filterByAuthor() {
    return Array.from(this.books.values()).sort((a, b) => a.author.localeCompare(b.author));    
    },

    filterByRead() {
    return Array.from(this.books.values()).filter(book => book.read === true);
    },

    deleteOne(id) {
    this.books.delete(id);
    },

    deleteMany(){
        this.books.clear();
    }
}