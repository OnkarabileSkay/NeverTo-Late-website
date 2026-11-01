// Function to update header profile icon across all pages
function updateHeaderProfileIcon() {
    const savedUser = localStorage.getItem("nvtl_user");
    const profileElements = document.querySelectorAll('#profileIcon, a[title="Account"]');

    profileElements.forEach(link => {
        if (savedUser && savedUser !== "null" && savedUser !== "undefined") {
            try {
                const user = JSON.parse(savedUser);
                if (user && user.initials) {
                    const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
                    link.innerHTML = `<span class="user-avatar-badge">${user.initials}</span>`;
                    link.title = fullName || "Account";
                    link.setAttribute("aria-label", fullName || "Account");
                }
            } catch (e) {
                console.error("Error parsing user session", e);
            }
        } else {
            // Restore the default icon when the user is logged out
            link.innerHTML = `<i class="fa-solid fa-user"></i>`;
            link.title = "Account";
            link.setAttribute("aria-label", "Account");
        }
    });
}

// function to clears sessions & redirects the user to home page
function logoutUser() {
    localStorage.removeItem("nvtl_user");
    updateHeaderProfileIcon();
    window.location.href = "index.html";
}

// Run header icon check on load
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateHeaderProfileIcon);
} else {
    updateHeaderProfileIcon();
}

document.addEventListener("DOMContentLoaded", () => {
    // Select containers
    const stepEmail = document.getElementById("step-email") || document.getElementById("form-email")?.parentElement;
    const stepOtp = document.getElementById("step-otp");
    const stepDetails = document.getElementById("step-details");
    const stepSuccess = document.getElementById("step-success");
    const stepProfile = document.getElementById("step-profile");

    const formEmail = document.getElementById("form-email");
    const formOtp = document.getElementById("form-otp");
    const formDetails = document.getElementById("form-details");

    const userEmailInput = document.getElementById("user-email");
    const displayEmail = document.getElementById("display-email");

    const otpDigits = document.querySelectorAll(".otp-digit");
    const resendOtpBtn = document.getElementById("resend-otp-btn");
    const backToEmailBtn = document.getElementById("back-to-email-btn");
    
    const updateProfileBtn = document.getElementById("update-profile-btn");
    const logoutBtn = document.getElementById("logout-btn");

    let generatedOtp = "";

    // Helper function to switch steps cleanly
    function goToStep(targetStep) {
        if (!targetStep) return;
        
        // Hide all form steps
        document.querySelectorAll(".form-step, #step-email, #step-otp, #step-details, #step-success, #step-profile").forEach(step => {
            step.classList.remove("active");
            step.style.display = "none";
        });

        // Activate and display target step
        targetStep.classList.add("active");
        targetStep.style.display = "block";
    }

    // CHECK LOGIN STATUS IMMEDIATELY ON LOAD
    const savedUser = localStorage.getItem("nvtl_user");
    const fullNameDisplay = document.getElementById("profile-display-fullname") || document.querySelector("#step-profile h2");
    const emailDisplay = document.getElementById("profile-display-email") || document.querySelector("#step-profile .subtitle");

    if (savedUser && savedUser !== "null" && savedUser !== "undefined") {
        try {
            const user = JSON.parse(savedUser);
            const formattedName = `${user.firstName || ''} ${user.lastName || ''}`.trim();

            if (fullNameDisplay && formattedName) {
                fullNameDisplay.textContent = formattedName;
            }
            if (emailDisplay && user.email) {
                emailDisplay.textContent = user.email;
            }

            // Show profile step directly if element exists
            if (stepProfile) {
                goToStep(stepProfile);
            }
        } catch (e) {
            console.error("Error parsing logged-in user data:", e);
            localStorage.removeItem("nvtl_user");
            if (stepEmail) goToStep(stepEmail);
        }
    } else {
        // Clear ghost display text when logged out
        if (fullNameDisplay) fullNameDisplay.textContent = "";
        if (emailDisplay) emailDisplay.textContent = "";

        if (stepEmail) {
            goToStep(stepEmail);
        }
    }

    // REAL EMAIL OTP GENERATION VIA EMAILJS
    function generateOtp() {
        generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
        const userEmail = userEmailInput ? userEmailInput.value.trim() : "";

        if (!userEmail) {
            alert("Please enter a valid email address.");
            return;
        }

        const templateParams = {
            to_email: userEmail,
            otp_code: generatedOtp
        };

        // Send actual email via EmailJS using Service ID & Template ID
        emailjs.send("service_hytwirp", "template_ps39zto", templateParams)
            .then(() => {
                console.log("OTP sent successfully to " + userEmail);
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Failed to send verification email. Please check your network or template settings.");
            });
    }

    if (formEmail) {
        formEmail.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailValue = userEmailInput ? userEmailInput.value.trim() : "";
            if (emailValue) {
                if (displayEmail) displayEmail.textContent = emailValue;
                generateOtp();
                goToStep(stepOtp);
                if (otpDigits[0]) otpDigits[0].focus();
            }
        });
    }

    otpDigits.forEach((digit, index) => {
        digit.addEventListener("input", (e) => {
            if (e.target.value.length === 1 && index < otpDigits.length - 1) {
                otpDigits[index + 1].focus();
            }
        });

        digit.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !e.target.value && index > 0) {
                otpDigits[index - 1].focus();
            }
        });
    });

    if (formOtp) {
        formOtp.addEventListener("submit", (e) => {
            e.preventDefault();
            let enteredOtp = "";
            otpDigits.forEach(input => enteredOtp += input.value);

            if (enteredOtp === generatedOtp) {
                goToStep(stepDetails);
            } else {
                alert("Invalid code. Please try again.");
            }
        });
    }

    if (resendOtpBtn) {
        resendOtpBtn.addEventListener("click", () => {
            otpDigits.forEach(input => input.value = "");
            generateOtp();
            if (otpDigits[0]) otpDigits[0].focus();
        });
    }

    if (backToEmailBtn) {
        backToEmailBtn.addEventListener("click", () => goToStep(stepEmail));
    }

    // Pre-fill form when clicking Update Profile
    if (updateProfileBtn) {
        updateProfileBtn.addEventListener("click", () => {
            const currentUser = JSON.parse(localStorage.getItem("nvtl_user") || "{}");
            if (currentUser) {
                if (document.getElementById("first-name")) document.getElementById("first-name").value = currentUser.firstName || "";
                if (document.getElementById("last-name")) document.getElementById("last-name").value = currentUser.lastName || "";
                if (document.getElementById("mobile-number")) document.getElementById("mobile-number").value = currentUser.mobile || "";
                if (document.getElementById("street-address")) document.getElementById("street-address").value = currentUser.address || "";
                if (document.getElementById("city")) document.getElementById("city").value = currentUser.city || "";
                if (document.getElementById("postal-code")) document.getElementById("postal-code").value = currentUser.postalCode || "";
            }
            const detailsHeading = document.getElementById("details-heading");
            if (detailsHeading) detailsHeading.textContent = "Update Profile";
            goToStep(stepDetails);
        });
    }

    if (formDetails) {
        formDetails.addEventListener("submit", (e) => {
            e.preventDefault();

            const firstName = document.getElementById("first-name") ? document.getElementById("first-name").value.trim() : "";
            const lastName = document.getElementById("last-name") ? document.getElementById("last-name").value.trim() : "";
            const initials = ((firstName.charAt(0) || "") + (lastName.charAt(0) || "")).toUpperCase();

            const userData = {
                email: userEmailInput && userEmailInput.value ? userEmailInput.value.trim() : (JSON.parse(localStorage.getItem("nvtl_user") || "{}").email || ""),
                firstName: firstName,
                lastName: lastName,
                initials: initials,
                mobile: document.getElementById("mobile-number") ? document.getElementById("mobile-number").value.trim() : "",
                address: document.getElementById("street-address") ? document.getElementById("street-address").value.trim() : "",
                city: document.getElementById("city") ? document.getElementById("city").value.trim() : "",
                postalCode: document.getElementById("postal-code") ? document.getElementById("postal-code").value.trim() : ""
            };

            localStorage.setItem("nvtl_user", JSON.stringify(userData));
            updateHeaderProfileIcon();
            goToStep(stepSuccess);
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", logoutUser);
    }
});