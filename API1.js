
document.addEventListener('DOMContentLoaded', () => {
  const dataList = document.getElementById('data-list');

  // Fetch data from the provided API
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.title;
        dataList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching data:', error.message));
});