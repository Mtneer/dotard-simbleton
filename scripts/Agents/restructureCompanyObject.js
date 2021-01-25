export const restructure = (businesses,filterKeys) => {

    const newStructure = businesses.map(companyObject => {
        
        let dataObj = {};
        for (const key of filterKeys) {
            dataObj[key] = companyObject[key];
        }
        return dataObj
        }
    )
    return newStructure
}