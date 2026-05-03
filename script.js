// Elements ko select karna
const closeBtn = document.getElementById('closeBtn');
const imageInput = document.getElementById('imageInput');
const mainImage = document.getElementById('mainImage');

// Jab red cross button par click ho
closeBtn.addEventListener('click', () => {
    // Hidden file input ko trigger karna
    imageInput.click();
});

// Jab user file select karle
imageInput.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        // Jab file read ho jaye
        reader.onload = function(e) {
            // Purani image ka source badal kar nayi image ka data rakh dena
            mainImage.src = e.target.result;
        }

        reader.readAsDataURL(file);
    }
});
