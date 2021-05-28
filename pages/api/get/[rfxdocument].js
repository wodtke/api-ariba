import { getToken } from '../../../utils/token'

async function RFXDocument(request, response){

    const { rfxdocument } = request.query
    const apiKey = process.env.SOURCING_APPROVAL_APIKEY;
    const urlSourcing = process.env.URL_SOURCING_APPROVAL;
    const oAuth = process.env.SOURCING_APPROVAL_OAUTH;
    const realm = process.env.REALM;
    const accessToken = await getToken(oAuth)
    
    const headers = { 'Content-Type': 'application/json', 'apikey': `${apiKey}`, 'Authorization':`Bearer ${accessToken}` }
    const url = `${urlSourcing}/prod/RFXDocument/${rfxdocument}?realm=${realm}`;
    const sourcingResponse = await fetch(url,{headers: headers});
    const sourcingResponseJson = await sourcingResponse.json();


    response.json({        
        sourcingApproval: sourcingResponseJson
    });

}

export default RFXDocument;