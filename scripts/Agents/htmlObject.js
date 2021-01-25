export const htmlObject = (dataObject, header) => {

    let htmlString = `
        <section class="${header}">
        <div class="${header}__detail">
        <h2 class="${header}__name">${dataObject.purchasingAgent.nameFirst} ${dataObject.purchasingAgent.nameLast}</h2>
        <p>${dataObject.companyName}</p>
        <p>${dataObject.phoneWork}</p>
        </div>
        </section>`

        return htmlString
}

