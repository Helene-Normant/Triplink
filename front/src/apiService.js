const API_ROOT = process.env.REACT_APP_API_URL+'/api/';

const requestResult = (response) => {
    return (response.statusText === 'OK' || response.statusText === 'Created')  ? response.json().then((res) => res) : response;
  }

const headers = new Headers({
    "Content-Type": "application/json",})
  
const requests = {
    get: async (endpoint) =>
      await fetch(`${API_ROOT}${endpoint}`, {
        method: "GET",
        headers,
      }).then((response) => requestResult(response)),
    post: async (endpoint, body = null) =>
      await fetch(`${API_ROOT}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers,
      }).then((response) => requestResult(response)),
    put: async (endpoint, body = null) =>
      await fetch(`${API_ROOT}${endpoint}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers,
      }).then((response) => requestResult(response)),
    del: async (endpoint) =>
      await fetch(`${API_ROOT}${endpoint}`, {
        method: "DELETE",
        headers,
      }).then((response) => requestResult(response)),
  };

  const Users = {
    get: async () => await requests.get("users"),
    post: async (body) => await requests.post("users", body),
  }

export default { 
    API_ROOT,
    Users,
    headers,
    requests
}
