const baseUrl = 'https://jsonplaceholder.typicode.com';

export default class Api {
  static async fetchUsers() {
    try {
      const response = await fetch(`${baseUrl}/users`, { method: 'GET' });
      
      if (response.status >= 400) {
        return Promise.reject(`There was an error when fetching the users.`);
      }

      return Promise.resolve(response.json());
    } catch (error) {
      return Promise.reject(error);
    }
  }
}