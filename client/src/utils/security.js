class Security {
  save(token) {
    localStorage.setItem("token", token);
    window.location.assign("/dashboard");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    window.location.assign("/");
  }
}
export default new Security();
