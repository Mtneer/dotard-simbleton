
import { BusinessList, informationList } from './BusinessList.js'


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



// agentList([filterKeys array], "Header")
informationList(["purchasingAgent","companyName","phoneWork"], "Purchasing Agent")
