useEffect(() => {
  fetch("http://10.73.63.143:5000/api/message")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);