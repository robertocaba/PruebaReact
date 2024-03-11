import React, { useState } from 'react';

function SoapValencia() {
  const [response, setResponse] = useState(null);

  const handleSoapRequest = () => {
    // Realizar una solicitud SOAP aquí
    const soapRequest = `<?xml version="1.0" encoding="UTF-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:sig="http://sigbre.tragsa.es/">
      <soap:Header/>
      <soap:Body>
        <sig:getInfoRelevos>
        <!--Opcional:-->
          <sig:fecha>01/01/2023</sig:fecha>
          <sig:idProvincia>46</sig:idProvincia>
          <sig:token>r3lev#20??84</sig:token>
        </sig:getInfoRelevos>
      </soap:Body>
    </soap:Envelope>`;
    fetch('https://sigbre.sgise.es/ws/wsRelevos.asmx?WSDL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml',
        },
        body: soapRequest,
      })
        .then(response => response.text())
        .then(data => {
          // Procesar la respuesta SOAP aquí
          setResponse(data);
        })
        .catch(error => {
          console.error('Error al realizar la solicitud SOAP:', error);
        });
    };
    return (
        <div>
          <button onClick={handleSoapRequest}>Realizar solicitud SOAP</button>
          {response && (
            <div>
              <h2>Respuesta del servicio SOAP:</h2>
              <pre>{response}</pre>
            </div>
          )}
        </div>
      );
    }
    
    export default SoapValencia;
    
  
  
