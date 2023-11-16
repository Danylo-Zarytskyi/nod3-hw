document.addEventListener('DOMContentLoaded', async () => {
    const res = await axios.get('/api/coffee-description');
    document.getElementsByClassName('description').textContent = res.data;
});

