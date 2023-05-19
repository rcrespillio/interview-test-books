import fetchBooksAPI from "../api";

export default async function getAuthor(key: string) {
    const response = await fetchBooksAPI('GET', `authors/${key}.json`);
    const parsedRes = {
        type: response.type,
        name: response.name,
        key,
        sourceRecords: response.source_records,
        latestRevision: response.latest_revision,
        revision: 1,
        created: response.created,
        lastModified: response.last_modified,
    };

    return parsedRes;
}

