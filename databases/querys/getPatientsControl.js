const getPatientsControl = (groupBed) => {
    return `
    Select H.HSUNOMBRE,
    B.HCACODIGO As CAMA,
    C.AINCONSEC As INGRESO,
    C.AINFECING As FECHA,
    D.PACNUMDOC As IDENTIFICACION,
    (D.PACPRINOM + ' ' + D.PACSEGNOM + ' ' + D.PACPRIAPE + ' ' + D.PACSEGAPE) As
    'NOMBRE DEL PACIENTE',
    DateDiff(YEAR, D.GPAFECNAC, GetDate()) As EDAD,
    Case When D.GPASEXPAC = 1 Then 'M' When D.GPASEXPAC = 2 Then 'F' End As SEXO,
    DateDiff(DAY, C.AINFECING, GetDate()) As DIAS,
    E.GDENOMBRE As ENTIDAD
    From HPNESTANC A
        Inner Join HPNDEFCAM B On A.HPNDEFCAM = B.OID
        Inner Join ADNINGRESO C On A.ADNINGRES = C.OID
        Inner Join GENPACIEN D On C.GENPACIEN = D.OID
        Inner Join GENESTRATO F On D.GENESTRATO = F.OID
        Left Join GENDIAGNO G On C.DGNDIAGNO = G.OID
        Inner Join GENDETCON E On C.GENDETCON = E.OID
        Inner Join HPNSUBGRU H On B.HPNSUBGRU = H.OID
        Inner Join GENARESER I On H.GENARESER = I.OID
        Inner Join ADNCENATE On ADNCENATE.OID = B.ADNCENATE
    Where H.HSUCODIGO = '${groupBed}' And B.HCAESTADO < 3 And A.HESFECSAL Is Null
    Order By CAMA
    `
}

module.exports = {
    getPatientsControl
}