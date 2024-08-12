document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('image');
    const displayImage = document.getElementById('display');

    imageInput.addEventListener('input', () => {
        displayImage.src = imageInput.value;
        console.log(imageInput.value); // For debugging purposes
    });
});
