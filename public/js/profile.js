const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#post-name').value.trim();
  const description = document.querySelector('#post-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

const editButtonHandler = async (event) => {
  if(event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    document.location.replace(`/edit/${id}`)

  } else {
    alert('Could not edit post');
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);


// we ensure that each post has separate button functionality 
document
  .querySelectorAll('.edit-post').forEach(button => button.addEventListener('click', editButtonHandler))
  

document
  .querySelectorAll('.delete-post').forEach(button => button.addEventListener('click', delButtonHandler))
  
