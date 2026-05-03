// 1. Pannellum Viewer ko initial image ke sath setup karna
let viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "default-pic.jpg", // Aapki default photo ka path
    "autoLoad": true,
    "autoRotate": -2,     // Auto-rotation speed (- means right to left)
    "showControls": true,
    "compass": true      // Compass dikhane ke liye
});

const closeBtn = document.getElementById('closeBtn');
const imageInput = document.getElementById('imageInput');

// 2. Jab user Red Cross button par click kare
closeBtn.addEventListener('click', () => {
    // Hidden file picker ko click karwana
    imageInput.click();
});

// 3. Jab user apni file select kare
imageInput.addEventListener('change', function() {
    const file = this.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const newImageData = e.target.result;
            
            // Purane viewer ko destroy karna zaroori hai naya load karne ke liye
            viewer.destroy();
            
            // Nayi photo ke sath viewer ko dobara banana
            viewer = pannellum.viewer('panorama', {
                "type": "equirectangular",
                "panorama": newImageData,
                "autoLoad": true,
                "autoRotate": -2
            });
        }
        
        // Image ko as DataURL read karna
        reader.readAsDataURL(file);
    }
});
