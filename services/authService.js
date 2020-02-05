const apiBaseUrl = "https://beta.stockzoom.com";

export const authService = {
  login: authenticate
};

async function authenticate(email, password) {
  const res = await fetch(apiBaseUrl + "/api-token-auth/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email, password: password })
  });
  const response = await res.json();
  return response;
}
