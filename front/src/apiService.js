const API_ROOT = process.env.REACT_APP_API_URL + '/api/';

const requestResult = (response) => {
  return (
    response.statusText === 'OK' || response.statusText === 'Created' || response.ok) ? response.json().then((res) => res
    ) : response;
}

const headers = new Headers({
  "content-type": "application/json",
})

const requestsSecure = {

  getSecure: async (endpoint) => {
    const getApiToken = async () => {
      return new Promise((resolve) => {
        const token = localStorage.getItem("apiToken");
        resolve(token);
      });
    };

    const token = await getApiToken();

    const headersToken = new Headers({
      "content-type": "application/json",
      "Authorization": `Bearer ${token ? token : ""}`
    });

    return fetch(`${API_ROOT}${endpoint}`, {
      method: "GET",
      headers: headersToken,
    }).then((response) => requestResult(response));
  },
};

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

const Publications = {
  getAll: async () => await requests.get("publications"),
  post: async (body) => await requests.post("publications", body),
  get: async (id) => await requests.get(`publications/${id}`),
}

const Login = {
  // get: async () => await requests.get("auth"),
  post: async (body) => await requests.post("auth", body),
}

const Logout = {
  post: async () => await requests.post("logout"),
}

const User = {
  get: async (id) => await requestsSecure.getSecure(`users/${id}`),
  post: async (body) => await requests.post("users", body),
  getAll: async () => await requests.get("users"),
}

const Countries = {
  getAll: async () => await requests.get("countries"),
}

const Categories = {
  getAll: async () => await requests.get("categories"),
}

const TravelerPartners = {
  getAll: async () => await requests.get("traveler_partners"),
}

const apiService = {
  API_ROOT,
  Login,
  Logout,
  User,
  Publications,
  Countries,
  headers,
  requests,
  Categories,
  TravelerPartners
}

export default apiService;
