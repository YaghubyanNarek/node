fetch("http://localhost:3001/index.html")
  .then((response) => response.text()) // or .json() if you're expecting JSON
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error(e);
  });
