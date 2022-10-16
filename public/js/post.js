const newFormHandler = async (event) => {
    event.preventDefault();
  
   
    const description = document.querySelector('#post-desc').value.trim();
    // const post_id = event.target.getAttribute('data-id');

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
        // document.location.replace('/profile');
        window.location.reload();
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  // const updateButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/posts/${id}`, {
  //       method: 'POST',
  //     });
  
  //     if (response.ok) {
  //       window.location.reload();
  //     } else {
  //       alert('Failed to update post');
  //     }
  //   }
  // };

  document
    .querySelector('.comment-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.post-list')
  //   .addEventListener('click', delButtonHandler);