document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resumeForm');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Creating FormData object to gather form data including files
        const formData = new FormData(form);

        try {
            // Sending the data to backend using a POST request
            const response = await fetch('http://localhost:5001/api/candidates/add', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Candidate added successfully');
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData.message);
                alert('Failed to upload the resume');
            }
        } catch (error) {
            console.error('Error uploading the data:', error);
            alert('There was an error uploading the data');
        }
    });
});
