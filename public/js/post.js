const newFormHandler = async (event) => {
    // event.preventDefault();
  
   
    const description = document.querySelector('#post-desc').value.trim();
    const post_id = event.target.getAttribute('data-id');
   console.log(post_id)
    const postData = {
      description: description,
      post_id: post_id,
    } 
    const posting = JSON.stringify(postData)
    
    if (posting) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: posting,
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