const savePost = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const name = document.getElementById('title').value
    const description = document.getElementById('description').value

    // Grabs id by splitting window location URL and returns an array of 
    // strings minus 1 in order to get the last element of the array which corresponds to id 
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    // Send a PUT request to the API endpoint
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: { 'Content-Type': 'application/json' }

    });
    if (response.ok) {
        document.location.replace(`/post/${id}`)
    } else {
        alert('Failed to edit post')
    }
};

document.querySelector('.edit-post-form').addEventListener('submit', savePost);