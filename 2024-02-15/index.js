// Use Fetch API to get data from Fake API Service such as jsonplaceholder.typicode.com.
// Use Promises and async await to achieve this and render the data on page.
const baseUrl = "https://jsonplaceholder.typicode.com";
const endpoints = ["users", "posts", "todos"];

document.addEventListener("DOMContentLoaded", () => {
  fetchData(); // Call the function to fetch and render data
});

async function fetchData() {
  const dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = ""; // Clear previous content

  try {
    // Fetch data from multiple endpoints in parallel using Promise.all
    const dataPromises = endpoints.map(async (endpoint) => {
      const response = await fetch(`${baseUrl}/${endpoint}`);
      if (!response.ok) {
        throw new Error(
          `Error fetching data from ${endpoint}: ${response.status}`
        );
      }
      const data = await response.json();
      return { endpoint, data };
    });

    const fetchedData = await Promise.all(dataPromises);

    // Render data for each endpoint
    fetchedData.forEach(({ endpoint, data }) => {
      const dataCard = document.createElement("div");
      dataCard.classList.add("data-card");

      const header = document.createElement("h3");
      header.textContent = endpoint;
      dataCard.appendChild(header);

      const dataList = document.createElement("ul");
      data.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = JSON.stringify(item, null, 2); // Pretty-print JSON
        dataList.appendChild(listItem);
      });
      dataCard.appendChild(dataList);

      dataContainer.appendChild(dataCard);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "An error occurred while fetching data. Please try again later.";
    dataContainer.appendChild(errorMessage);
  }
}
