document.addEventListener('DOMContentLoaded', async () => {
    const res = await axios.get('/api/coffee-specs');
    document.getElementsByClassName('specs').textContent = res.data.specs;
})