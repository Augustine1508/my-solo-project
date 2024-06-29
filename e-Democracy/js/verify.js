document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById('previewImage');
    const navProfileImage = document.getElementById('navProfileImage');
    
    // Preview the image
    const reader = new FileReader();
    reader.onload = function(e) {
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
        navProfileImage.src = e.target.result;
        navProfileImage.style.display = 'block';
    };
    reader.readAsDataURL(file);
});

function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select an image to upload.');
        return;
    }

    // Simulate the image upload process
    setTimeout(() => {
        alert('Image uploaded successfully!');
    }, 1000);
}




// for verification

function showEmailOtpInput() {
    const email = document.getElementById('email').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate sending OTP
    alert(`OTP sent to email: ${email}`);
    document.getElementById('emailOtp').style.display = 'block';
    document.getElementById('verifyEmailOtpButton').style.display = 'block';
}

function verifyEmailOtp() {
    const emailOtp = document.getElementById('emailOtp').value;

    if (emailOtp === "1234") { // Simulate OTP check
        alert('Email verified successfully!');
        document.getElementById('emailOtp').style.display = 'none';
        document.getElementById('verifyEmailOtpButton').style.display = 'none';
    } else {
        alert('Invalid OTP. Please try again.');
    }
}

function showPhoneOtpInput() {
    const phone = document.getElementById('phone').value;

    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    // Simulate sending OTP
    alert(`OTP sent to phone: ${phone}`);
    document.getElementById('phoneOtp').style.display = 'block';
    document.getElementById('verifyPhoneOtpButton').style.display = 'block';
}

function verifyPhoneOtp() {
    const phoneOtp = document.getElementById('phoneOtp').value;

    if (phoneOtp === "5678") { // Simulate OTP check
        alert('Phone verified successfully!');
        document.getElementById('phoneOtp').style.display = 'none';
        document.getElementById('verifyPhoneOtpButton').style.display = 'none';
    } else {
        alert('Invalid OTP. Please try again.');
    }
}

function verifyNationalId() {
    const nationalId = document.getElementById('nationalId').value;

    if (validateNationalId(nationalId)) {
        alert('National ID verified successfully!');
    } else {
        alert('Invalid National ID. Please try again.');
    }
}

function verifyAddress() {
    const address = document.getElementById('address').value;

    if (address) {
        alert('Address verified successfully!');
    } else {
        alert('Please enter your address.');
    }
}

function verifyProofOfAddress() {
    const proofOfAddress = document.getElementById('proofOfAddress').files[0];

    if (proofOfAddress) {
        alert('Proof of address verified successfully!');
    } else {
        alert('Please upload a proof of address.');
    }
}

document.getElementById('verificationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Check if all fields are verified before submitting
    const emailOtp = document.getElementById('emailOtp').style.display === 'none';
    const phoneOtp = document.getElementById('phoneOtp').style.display === 'none';

    if (!emailOtp || !phoneOtp) {
        alert('Please complete all verifications before submitting the form.');
        return;
    }

    // Display success message
    document.getElementById('successMessage').style.display = 'block';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
}

function validateNationalId(nationalId) {
    // Implement a proper validation based on your requirements
    return nationalId.length > 5;
}
