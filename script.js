const bouton=document.getElementById("bouton");


bouton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (email === '') {
        alert("Problème d'email");
    }
})