document.addEventListener('DOMContentLoaded', function() {
    
    // Handle Form Submission & Storing Enquiries
    const enquiryForm = document.querySelector('form');
    if (enquiryForm && !enquiryForm.id) { // Ensures it's the enquiry form, not the login modal
        enquiryForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const inputs = this.querySelectorAll('input, textarea');
            let formData = {};
            inputs.forEach(input => {
                if (input.name) formData[input.name] = input.value;
            });

            const newEnquiry = {
                date: new Date().toISOString().slice(0, 16).replace('T', ' '),
                name: formData['name'] || formData['fullName'] || 'Anonymous',
                email: formData['email'] || 'No email provided',
                message: formData['message'] || formData['enquiry'] || 'No message'
            };

            let existingEnquiries = JSON.parse(localStorage.getItem('nt_enquiries')) || [];
            existingEnquiries.unshift(newEnquiry);
            localStorage.setItem('nt_enquiries', JSON.stringify(existingEnquiries));

            // Create or update inline green success message
            let successMsg = this.querySelector('.form-success-msg');
            if (!successMsg) {
                successMsg = document.createElement('div');
                successMsg.className = 'form-success-msg';
                successMsg.style.color = '#2ecc71';
                successMsg.style.marginTop = '15px';
                successMsg.style.fontWeight = 'bold';
                successMsg.style.textAlign = 'center';
                this.appendChild(successMsg);
            }
            successMsg.textContent = 'Enquiry submitted successfully!';

            this.reset();
        });
    }

    //Open Admin Login Modal
    window.openAdmin = function() {
        const modal = document.getElementById('adminLoginModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    };

    //Close Admin Login Modal
    window.closeAdminModal = function() {
        const modal = document.getElementById('adminLoginModal');
        if (modal) {
            modal.style.display = 'none';
        }
    };

    //Handle Admin Login Form Submission inside the modal
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const enteredUser = document.getElementById('adminUser').value.trim();
            const enteredPin = document.getElementById('adminPin').value.trim();
            const errorMsg = document.getElementById('loginErrorMsg');

            const correctUser = "nvtl-restrictions";
            const correctPin = "2006";

            if (enteredUser === correctUser && enteredPin === correctPin) {
                window.location.href = "admin.html";
            } else {
                // Show inline error message below buttons
                if (errorMsg) {
                    errorMsg.textContent = "Incorrect username or PIN! Access denied.";
                    errorMsg.style.display = "block";
                }
                document.getElementById('adminPin').value = '';
            }
        });
    }

});