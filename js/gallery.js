document.addEventListener('DOMContentLoaded', () => {
    fetch('data/cats.json')
        .then(response => response.json())
        .then(images => {
            const gallery = document.getElementById('gallery');
            images.forEach(cat => {
                const img = document.createElement('img');
                img.src = cat.src;
                img.alt = cat.alt;
                img.title = cat.title;
                img.width = 200;
                gallery.appendChild(img);
            });
        })
        .catch(err => console.error('이미지를 불러오는 중 오류 발생:', err));
});
