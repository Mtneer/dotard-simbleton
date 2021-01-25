// import { useBusinesses } from "../dataManagement/BusinessProvider.js"

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