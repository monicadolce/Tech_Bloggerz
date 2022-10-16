const newFormHandler = async (event) => {
    event.preventDefault();
  
   
    const description = document.querySelector('#post-desc').value.trim();
  

    // Grabs post_id by splitting window location URL and returns an array of 
    // strings minus 1 in order to get the last element of the array which corresponds to post_id 
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    
    if (description) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({description, post_id}),
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (response.ok) {
        
        window.location.reload();
      } else {
        alert('Failed to create post');
      }
    }
  };
  

  document
    .querySelector('.comment-form')
    .addEventListener('submit', newFormHandler);
  