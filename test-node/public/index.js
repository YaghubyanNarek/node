const names = document.querySelector(".name");
const pass = document.querySelector(".pass");
const sub = document.querySelector(".sub");

const data = {
    email: '',
    password: '', 
}

sub.addEventListener("click", (e) => {
    e.preventDefault();
    data.email = names.value;
    data.password = pass.value; 
    console.log(data);

    fetch("http://localhost:3001/test", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network was not okay");
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data); 
    })
    .catch((error) => {
        console.log("Error:", error);
    })
});
