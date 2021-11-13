export interface Quote {
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: [];
}

export const getQuote = async (): Promise<Quote> => {
  // Fetch a random quote from the Quotable API
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error("something went wrong when fetching a random quote");
  }
}
