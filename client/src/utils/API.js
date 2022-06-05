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

export const fetchAllActivities = () => {
  return fetch("api/activities", {
    method: "GET",
  });
};

// export const

// export const createActivity = (data) => {
//   return fetch("api/activities", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(data),
//   });
// };
