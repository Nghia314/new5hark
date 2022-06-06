import decode from "jwt-decode";

class Security {
  save(token) {
    localStorage.setItem("token", token);
    window.location.assign("/dashboard");
  }

  loggedIn() {
    const token = this.getToken();
    //not token is false, not false is true, need TRUE not the token itself
    return !!token && !this.tokenHasExpired(token);
  }

  tokenHasExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
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
