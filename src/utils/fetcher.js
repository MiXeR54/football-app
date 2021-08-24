//options could be extended

export default function fetcher(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": process.env.REACT_APP_TOKEN,
    },
  }).then((res) => res.json());
}
