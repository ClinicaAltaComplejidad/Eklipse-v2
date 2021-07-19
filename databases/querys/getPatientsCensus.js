const getPatientsCensus = (clinic) => {
    return `
    SELECT AD.ACANOMBRE AS 'CENTRO DE ATENCION',
D.PACNUMDOC AS DOCUMENTO,
D.GPANOMCOM AS 'NOMBRE DEL PACIENTE',
DateDiff(YEAR, D.GPAFECNAC, GetDate()) As EDAD,
Case When D.GPASEXPAC = 1 Then 'MASCULINO' When D.GPASEXPAC = 2 Then 'FEMENINO' End As SEXO,
A.AINDIRACU AS DIRECCION,
F.GETNOMEST AS ESTRATO,
A.AINACUDIE AS ACUDIENTE,
A.AINTELACU AS TEL_ACUDIENTE,
A.AIPARACUD AS PARETESCO,
A.AINCONSEC As INGRESO,
A.AINCAUING AS 'CAUSA DE INGRESO',
H.HCACODIGO AS CAMA,
CONVERT(VARCHAR, A.AINFECING, 106) AS 'FECHA DE INGRESO',
('['+ PS.PRECODIGO +']'+' '+PS.PRENOMBRE) AS 'ENTIDAD REMISION',
HE.HESFECING,
HE.HESFECSAL,
('[' + CAST(G.OID AS VARCHAR) + ']' + ' ' + G.GASNOMBRE) AS 'AREA DE SERVICIO',
DateDiff(DAY, A.AINFECING, GetDate()) As DIAS,
E.GDENOMBRE As CONTRATO
FROM HPNESTANC HE
INNER JOIN HPNDEFCAM H ON HE.HPNDEFCAM = H.OID
INNER JOIN ADNINGRESO A  ON HE.ADNINGRES = A.OID
INNER JOIN GENPACIEN D ON A.GENPACIEN = D.OID
Inner Join GENESTRATO F On D.GENESTRATO = F.OID
LEFT JOIN GENDIAGNO GE ON A.DGNDIAGNO = GE.OID
INNER JOIN GENDETCON E ON A.GENDETCON = E.OID
Inner Join HPNSUBGRU HP On H.HPNSUBGRU = HP.OID
INNER JOIN GENARESER G ON HP.GENARESER = G.OID
INNER JOIN ADNCENATE AD ON AD.OID = H.ADNCENATE
INNER JOIN GENPRESAL PS ON PS.OID = A.DGNPRESAL
WHERE AD.ACACODIGO = '${clinic}' And H.HCAESTADO < 3 And HE.HESFECSAL Is Null
Order By CAMA
    `
}

module.exports = {
    getPatientsCensus
}