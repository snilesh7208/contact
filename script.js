document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    const statusMsg = document.getElementById('form-status');
    const originalBtnText = submitBtn.innerText;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerText = 'Sending...';
    statusMsg.style.display = 'none';

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('/.netlify/functions/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            // Success: Redirect to success page
            window.location.href = 'success.html';
        } else {
            // Error from server
            throw new Error(result.error || 'Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        statusMsg.innerText = '❌ Error: ' + error.message;
        statusMsg.style.color = '#ef4444'; // Red color
        statusMsg.style.display = 'block';

        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
    }
});
