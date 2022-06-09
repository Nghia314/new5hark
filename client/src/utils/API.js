export const createUser = (data) => {
  return fetch("api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const loginUser = (data) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getUserData = (token) => {
  return fetch("api/users/data", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createActivity = (data, token) => {
  return fetch("api/activities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const fetchAllActivities = () => {
  return fetch("api/activities", {
    method: "GET",
  });
};

export const createAchievement = (data, token) => {
  return fetch("api/achievements", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const updateUserAchievement = (data, token) => {
  return (
    fetch("api/users"),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );
};

export const deleteUserActivity = (data, token) => {
  return fetch("api/activities", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

// export const
