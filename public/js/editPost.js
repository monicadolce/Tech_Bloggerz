const savePost = async (event) => {
    event.preventDefault();
    const name = document.getElementById('title').value
    const description = document.getElementById('description').value
   
        const id =  window.location.toString().split('/')[window.location.toString().split('/').length - 1];

        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({name, description}),
            headers: {'Content-Type': 'application/json'}
            
        });
        if (response.ok) {
            document.location.replace(`/post/${id}`)
        } else {
            alert('Failed to edit post')
        }
};

document.querySelector('.edit-post-form').addEventListener('submit', savePost);