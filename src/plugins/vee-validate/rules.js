import {defineRule} from "vee-validate";
import {required, email, min, integer} from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule('integer', integer);


defineRule('date_format', (value) => {
    const pattern = /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/;

    if (!value || !value.length) {
        return true;
    }

    if (!pattern.test(value)) {
        return 'გთხოვთ სწორად მიუთითეთ თარიღი'
    }

    return true
});

defineRule('antibodies_date_format', (value) => {
    const pattern = /^\s*((?:19|20)\d{2})\/(1[012]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\s*$/;

    if (!value || !value.length) {
        return true;
    }

    if (!pattern.test(value)) {
        return 'გთხოვთ სწორად მიუთითეთ თარიღი (წწ/თთ/დდ)'
    }

    return true
});

defineRule('redberry_email', (value) => {
    if (!value || !value.length) {
        return true;
    }

    if (!value.endsWith('redberry.ge')) {
        return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
    }

    return true;
});