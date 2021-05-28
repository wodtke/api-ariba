async function getToken(request, response){
    
    const urlToken = process.env.URL_TOKEN;
    const oAuth = process.env.SOURCING_APPROVAL_OAUTH;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", `Basic ${oAuth}`);

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "openapi_2lo");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders, 
        body: urlencoded,
        redirect: 'follow'
    };

    const tokenResponse = await fetch(urlToken,requestOptions);
    const responseResponseJson = await tokenResponse.json();

    response.json({        
        token: responseResponseJson.access_token
    });
}

export default getToken;