
const ping = async ( ) => {
    let response = await fetch("http://localhost:3200/ping", { method: "GET" });
    let data = await response.json();
    console.log(data);
}

const signin = async ( email, password ) => {
    let response = await fetch(`http://localhost:3200/users/signin`, 
    { 
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            email: "djvsjn@gmail.com",
            password: "password"
        })
    });
    console.log(response);
    let data = await response.json();
    console.log(data);
}

signin("chrome@gmail.com", "chrome1234");
