// Get the modal
var modal = document.getElementById("myModal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Preview uploaded image
function previewImage() {
    var fileInput = document.getElementById('eventImage');
    var file = fileInput.files[0];
    
    if (file) {
        var reader = new FileReader();
        reader.onloadend = function () {
            // Open a new window with the uploaded image in fullscreen
            var imgWindow = window.open('', '_blank', 'fullscreen=yes');
            imgWindow.document.write('<img src="' + reader.result + '" style="width: 100%; height: 100%;" alt="Uploaded Image">');
        };
        reader.readAsDataURL(file);
    }
}

$(function() {
    // Initialize Datepicker
    $("#eventDate").datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0 // Disable past dates
    });

    // Initialize Timepicker
    $("#eventTime").timepicker({
        timeFormat: 'h:mm p',
        interval: 15, // 15 minutes interval
        scrollbar: true // Show scrollbar for large time lists
    });
});
