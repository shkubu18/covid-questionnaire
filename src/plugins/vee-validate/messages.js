import {configure} from "vee-validate";
import {localize, setLocale} from "@vee-validate/i18n";
import ka from "@vee-validate/i18n/dist/locale/ka.json"

configure({
    generateMessage: localize({
        ka: {
            ...ka,
            messages: {
                required: "გთხოვთ შეავსოთ მოცემული ველი",
                email: "თქვენ მიერ შეყვანილი მეილი არასწორია",
                min: "{field} უნდა შეიცავდეს მინიმუმ 0:{min} სიმბოლოს",
                integer: 'გთხოვთ სწორად მიუთითეთ რაოდენობა'
            },
            names: {
                first_name: "სახელი",
                last_name: "გვარი",
                email: "მეილი",
            },
        },
    }),
});

setLocale("ka");