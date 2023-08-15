export async function getRequest(url: string): Promise<any> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error('There was an error during the request');
    }
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      String(error);
    }
  }
}
