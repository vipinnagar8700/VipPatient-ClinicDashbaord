import {nanoid} from "nanoid";

export const cards = [
    {
        title: "New",
        number: 5124458695581022,
        exp: "12/24",
        cvv: 111,
        id: nanoid(5),
        type: "visa",
        main: false,
        archived: false
    },
    {
        title: "My New Visa",
        number: 4990458695583535,
        exp: "05/23",
        cvv: 123,
        id: nanoid(5),
        type: "visa",
        main: false,
        archived: false
    },
    {
        title: "Main payment card",
        number: 5168458695587070,
        exp: "01/23",
        cvv: 568,
        id: nanoid(5),
        type: "mastercard",
        main: true,
        archived: false
    },
    {
        title: "Visa Card",
        number: 5168458695583001,
        exp: "09/29",
        cvv: 487,
        id: nanoid(5),
        type: "visa",
        main: false,
        archived: false
    }
];