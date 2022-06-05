class Security {
  login(tok) {
    localStorage.setItem("token", tok);
    window.location.assign("/dashboard");
  }
}
export default new Security();
