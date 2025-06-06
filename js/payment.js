document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Format card number as user types
    const cardNumber = document.querySelector('input[name="cardNumber"]');
    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 16) value = value.slice(0, 16);
        let formattedValue = '';
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) formattedValue += '-';
            formattedValue += value[i];
        }
        e.target.value = formattedValue;
    });

    // Format expiration date as user types
    const expirationDate = document.querySelector('input[name="expirationDate"]');
    expirationDate.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 4) value = value.slice(0, 4);
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        e.target.value = value;
    });

    // Format security code as user types
    const securityCode = document.querySelector('input[name="securityCode"]');
    securityCode.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 4) value = value.slice(0, 4);
        e.target.value = value;
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get all input fields
        const country = document.querySelector('input[name="country"]');
        const firstName = document.querySelector('input[name="firstName"]');
        const lastName = document.querySelector('input[name="lastName"]');
        const address = document.querySelector('input[name="address"]');
        const city = document.querySelector('input[name="city"]');
        const postcode = document.querySelector('input[name="postcode"]');
        const email = document.querySelector('input[name="email"]');
        const cardNumber = document.querySelector('input[name="cardNumber"]');
        const expirationDate = document.querySelector('input[name="expirationDate"]');
        const securityCode = document.querySelector('input[name="securityCode"]');

        // Clear previous error messages
        clearErrors();

        let isValid = true;

        // Validate required fields
        const requiredFields = [
            { field: country, name: 'Country' },
            { field: firstName, name: 'First name' },
            { field: lastName, name: 'Last name' },
            { field: address, name: 'Address' },
            { field: city, name: 'City' },
            { field: postcode, name: 'Postcode' },
            { field: email, name: 'Email' },
            { field: cardNumber, name: 'Card number' },
            { field: expirationDate, name: 'Expiration date' },
            { field: securityCode, name: 'Security code' }
        ];

        requiredFields.forEach(({ field, name }) => {
            if (!field.value.trim()) {
                showError(field, `${name} is required`);
                isValid = false;
            }
        });

        // Validate email format
        if (email.value && !isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate card number (XXXX-XXXX-XXXX-XXXX format)
        if (cardNumber.value && !/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber.value)) {
            showError(cardNumber, 'Please enter a valid card number (XXXX-XXXX-XXXX-XXXX)');
            isValid = false;
        }

        // Validate expiration date (MM/YY format)
        if (expirationDate.value && !/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expirationDate.value)) {
            showError(expirationDate, 'Please enter a valid expiration date (MM/YY)');
            isValid = false;
        }

        // Validate security code (3 or 4 digits)
        if (securityCode.value && !/^\d{3,4}$/.test(securityCode.value)) {
            showError(securityCode, 'Please enter a valid security code (3 or 4 digits)');
            isValid = false;
        }

        if (isValid) {
            // If all validations pass, you can proceed with the payment
            alert('Payment successful!');
            form.reset();
        }
    });

    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function to show error message
    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;
        
        input.style.borderColor = 'red';
        input.parentNode.appendChild(errorDiv);
    }

    // Helper function to clear all error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.style.borderColor = '');
    }
});
