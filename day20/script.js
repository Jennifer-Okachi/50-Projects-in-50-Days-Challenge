const names = ["Mercy", "Jennifer", "Henry", "Dave", "Bohanos"];
const searchInput = document.getElementById("searchInput");
const nameList = document.getElementById("nameList");

function displayNames(namesToDisplay) {
  namesToDisplay.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
}

// Initial render
displayNames(names);

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase(); // Optional: make search case-insensitive

  const filteredNames = names.filter((filteredName) =>
    filteredName.toLowerCase().includes(searchTerm)
  );

  // Clear the list before rendering the new results
  nameList.innerHTML = "";

  if (filteredNames.length !== 0) {
    displayNames(filteredNames);
  } else {
    displayNames(names); // Or show a "No results found" message
  }
});