/**
 * Helper functions for login and register
 */

export function validateInputValue(value) {
    // Really basic validation used for both username and password TODO: add more robust validation logic
    let valid = {};
    if (!value) {
        valid = {
            isValid: false,
            text: "Invalid Value"
        }
        return valid;
    }
    if (value.length <= 3) {
        valid = {
            isValid: false,
            text: "Value must have more than 3 characters"
        }
        return valid;
    }
    valid = {
        isValid: true,
        text: false
    }
    return valid;
}