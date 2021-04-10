/*la mappa contiene array di un solo elemento perchè a questi potrebbero essere aggiunti elementi in seguito*/
const List_content = {
    Antivirus: ['V.I.A.D.'],
    Elaborazione: ['PhotoEdit', 'VideoEdit'],
    Professionali: ['AeroLAB', 'Galileo'],
    Speciali: ['M.A.C.K.', 'S.C.C.'],
    Ufficio: ['EasyOffice']
};

const List_descriptions = {
    AeroLAB: "Il software per eccellenza per la prototipazione aerospaziale.",
    EasyOffice: "Uno strumento indispensabile da avere sul vostro PC, questa suite vi permette di creare e gestire: documenti,fogli di calcolo,presentazioni etc... (Prezzo relativo alla licenza annuale)",
    Galileo: "Software,leader nel calcolo numerico e statistico, utilizzato in svariati settori dell'ingegneria e non solo.",
    'M.A.C.K.': "Uno dei nostri nuovi prodotti,un DBMS ultra-innovativo con prestazioni superiori ad ogni altro. (Prodotto non acquistabile online)",
    PhotoEdit: "Software pensato per rendere l'editing di immagini accessibile a tutti,tuttavia mantenendo le sue potenzialità in ambito professionale.",
    VideoEdit: "L'editing video non è mai stato così semplice...",
    'V.I.A.D.': "L'antivirus per eccellenza.(Prezzo relativo alla licenza annuale)",
    'S.C.C.': "Software per la gestione di comunicazioni satellitari.(Prodotto non acquistabile online)"
}

const prices = {
    AeroLAB: 5000,
    EasyOffice: 100,
    PhotoEdit: 29.99,
    VideoEdit: 49.99,
    'V.I.A.D.': 129.99,
    Galileo: 249.99
}

const img_names = {
    AeroLAB: "aero.png",
    EasyOffice: "eo.jpg",
    Galileo: "gl.png",
    PhotoEdit: "pe.jpg",
    VideoEdit: "ve.jpg",
    'V.I.A.D.': "viad.png",
}