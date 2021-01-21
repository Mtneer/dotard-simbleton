import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"



export const BusinessList = (filterInput, filterKey) => {
    let contentTarget = [];
    let companyArray = useBusinesses(filterInput,filterKey);
    let headingHTML = " ";

    if (filterInput === undefined) {
        contentTarget = document.querySelector(".businesses")

        headingHTML = "<h1>Business Clients</h1>"
    } else if (filterKey === "addressStateCode") {
        contentTarget = document.querySelector(".businessList--newYork")

        headingHTML = "<h1>New York Business Clients</h1>"
    } else if (filterKey === "companyIndustry") {
        contentTarget = document.querySelector(".businessList--manufacturing")

        headingHTML = "<h1>Manufacturing Business Clients</h1>"
    } 
    
    contentTarget.innerHTML += headingHTML;

    companyArray.forEach(
        (companyObject) => {
            contentTarget.innerHTML += Business(companyObject)
        }
    );

    return contentTarget
}