export function receivingDataArticles(page = 1, limit = 3) {
  const url = new URL('https://666d953c7a3738f7caccc458.mockapi.io/articles');
  url.searchParams.append('page', page);
  url.searchParams.append('limit', limit);

  return fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .catch(error => console.log(error));
}

export function receivingDataUser() {
  return fetch('https://666d953c7a3738f7caccc458.mockapi.io/users', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .catch(error => console.log(error));
}

export function savingDataUser(postData) {
  return fetch('https://666d953c7a3738f7caccc458.mockapi.io/users', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(postData),
  })
    .then(res => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .catch(error => console.log(error));
}
