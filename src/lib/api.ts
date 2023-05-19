const API_URL = process.env.BOOKS_API_URL!;

export default async function fetchBooksAPI(method: string = 'GET', path: string = '', body?: any): Promise<any> {
    let headers = {}
    if(['POST','PUT'].includes(method)){
        headers = { ...headers, 'Content-Type': 'application/json' };
    }
  
    const res = await fetch(API_URL+path, {
      headers,
      method,
      body,
      next: { revalidate: 0 },
    });
  
    const json = await res.json();

    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API');
    }

    return json;
  }