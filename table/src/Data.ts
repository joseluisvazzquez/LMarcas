import cat1 from "./cat1.png";
import cat2 from "./cat2.png";
import cat3 from "./cat3.png";
import cat4 from "./cat4.png";
import cat5 from "./cat5.png";
function createData(
    name: string,
    Bodytype: string,
    Cuteness: number,
    Country: string,
    Image: string,
    Bites:boolean

    
){return { name, Bodytype, Cuteness, Country, Image, Bites};}




const rows = [
    createData("Abyssinian", "Semi-foreign", 9, "Afro-Asia, likely Ethiopia", cat1, true),
    createData("Aegean", "Moderate", 6, "Greece", cat2, false),
    createData("American Bobtail", "Cobby", 8, "United States", cat3, true),
    createData("American Curl", "Semi-foreign", 7, "United States", cat4, true),
    createData("Burmese", "Semi-foreign or semi-cobby", 10, "Burma", cat5, false)
];

export default rows;