import fetchBooksAPI from "../api";

export default async function getBook(key: string) {
    const response = await fetchBooksAPI('GET', `works/${key}.json`);
    const parsedRes = {
        key,
        title: response.title, 
        authors: response.authors, 
        latestRevision: response.latest_revision, 
        revision: response.revision,
        created: response.created,
        lastModified: response.last_modified,
    };

    return parsedRes;
}

