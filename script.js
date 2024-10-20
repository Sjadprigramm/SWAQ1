const accessKey = 'g8BHvdo-mU87N6CAurG8EFTxbIS3EneRjvanzcBOs6E';

function loadImages() {
    fetch(`https://api.unsplash.com/photos/random?count=12&orientation=landscape&client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('image-container');
            imageContainer.innerHTML = '';
            data.forEach(photo => {
                const imgElement = document.createElement('div');
                imgElement.classList.add('image-card');
                imgElement.innerHTML = `
                    <img src="${photo.urls.regular}" alt="${photo.alt_description}" title="${photo.alt_description}">
                    <a href="${photo.links.download}?force=true" target="_blank" class="download-button">تحميل</a>
                `;
                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.log('Error fetching images:', error));
}

loadImages();