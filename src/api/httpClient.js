const API=process.env.REACT_APP_API

export function get(path) {
    return fetch(API + path, {
        headers: {
          Authorization:
            "Bearer " + process.env.REACT_APP_API_TOKEN,
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((res) => res.json())
}