fetch('https://upadhayay.github.io/db.json')
  .then(response => response.json())
  .then(data => {
    // Get the array of paper titles
    const paperTitles = data.books.map(paper => paper.title);
    
    // Print the array of paper titles to the HTML page
    const paperTitlesDiv = document.getElementById('raghu');
    for(let i=0; i < paperTitles.length; i++){
      const title = document.createElement('p');
      title.textContent = paperTitles[i];
      paperTitlesDiv.appendChild(title);
    }
  });

  