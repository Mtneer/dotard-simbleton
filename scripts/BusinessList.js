import { useBusinesses, useStructure } from "./Business/BusinessProvider.js"
import { Business } from "./Business/Business.js"
import { htmlObject } from "./Agents/htmlObject.js"



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

export const informationList = (filterKeys, header) => {
    let contentTarget = document.querySelector(".agents")

    let headingHTML = `<h1>${header}</h1>`

    let agentArray = useStructure(filterKeys);

    contentTarget.innerHTML += headingHTML;

    agentArray.forEach(
        (companyObject) => {
            contentTarget.innerHTML += htmlObject(companyObject, header)
        }
    );

    return contentTarget
}

// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            
           let businesses = useBusinesses()
           let foundBusiness = [];
           for (let business of businesses) {

                if (business.companyName.includes(keyPressEvent.target.value)) {
                    foundBusiness = business;
                }
            }
            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                
                <section>
                ${foundBusiness.addressFullStreet}
                </section>

                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });