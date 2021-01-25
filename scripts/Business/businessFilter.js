
export const filterDetails = (businesses, filterInput, filterKey) => {
    let businessArray = businesses.filter(companyObject => {
        if (companyObject[filterKey] === filterInput) {
            return true
        }
        return false
    })
    return businessArray
}