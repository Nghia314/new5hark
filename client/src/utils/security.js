class Security {
  login(tok) {
    return localStorage.setItem("token", tok);
  }
}
export default new Security();
