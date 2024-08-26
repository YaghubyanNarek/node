fetch("http://localhost:3001/index.html")
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error(e);
  });
