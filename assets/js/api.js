const getData = (url, onSuccess, onError) => {
  fetch(url,{mode: 'no-cors'})
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    // .catch(() => onError());
};

export {getData};
