
import { BusinessList } from './BusinessList.js'


/* filterKey options:
    {
        purchasingAgent: { 
            nameLast:
            nameFirst:
        }
        phoneWork: 
        orders: 
        companyName: 
        companyIndustry:
        addressZipCode: 
        addressStateCode: 
        addressFullStreet:
        addressCity:
      */

BusinessList()
BusinessList("NY", "addressStateCode")
BusinessList("Manufacturing","companyIndustry")
