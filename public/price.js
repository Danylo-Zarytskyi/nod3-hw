document.addEventListener('DOMContentLoaded', async () => {
    const res = await axios.get('/api/coffee-price');
    document.getElementsByClassName('price').textContent = `Ціна ${res.data.price}`;
})