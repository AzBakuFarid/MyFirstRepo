var searchInNav = document.querySelector("#home nav button");
searchInNav.addEventListener("click", function () {
    let searchDiv = document.getElementById("searchZone");
    if (!searchDiv.style.display || searchDiv.style.display == "none") {
        searchDiv.style.display = "flex";
        searchDiv.style.justifyContent = "center";
    }
    else { searchDiv.style.display = "none" }
})