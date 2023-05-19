import fetchBooksAPI from "../api";

export default async function searchBooks(search: string = '', { page = 1, pageSize = 50 } = {}) {
    const searchEncoded = encodeURIComponent(search);
    const response = await fetchBooksAPI('GET', `/search.json?q=${searchEncoded}&fields=key,title,author_name,first_publish_year&limit=${pageSize}&page=${page}`);
    const docs: { key: string, title: string, author_name: string[], first_publish_year: number }[] = response.docs;
    const parsedRes = docs.map(({ 
        key, title, author_name, first_publish_year
    }) => ({ 
        key,
        title, 
        authorName: author_name,
        firstPublishYear: first_publish_year,
    }));

    return {
        page,
        pageSize,
        total: response.numFound,
        offset: response.offset,
        results: parsedRes,
        q: response.q,
    };
}

