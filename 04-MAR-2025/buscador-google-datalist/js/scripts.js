const input = document.querySelector('#search-animals');
// Construimos objeto con enlaces
const enlaces = {
    "Perro": "https://www.google.com/search?q=perro&sca_esv=70cc93bfb03a553e&hl=es-419&sxsrf=AHTn8zqW2sHT2-W0kJ_iTdgRjguL2FlviQ:1741118863229&source=hp&biw=765&bih=714&ei=j13HZ_TZCq3QkPIP4fi30Q0&iflsig=ACkRmUkAAAAAZ8drn7NEn6NciPqa71wl05d53kHDe_0b&ved=0ahUKEwi03eeanfGLAxUtKEQIHWH8LdoQ4dUDCBc&uact=5&oq=perro&gs_lp=EgNpbWciBXBlcnJvMgcQIxgnGMkCMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQABiABDIIEAAYgAQYsQMyBRAAGIAESLoJUABY0wdwAHgAkAEAmAG3AaABigSqAQM0LjG4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ5gCBaACpgTCAgsQABiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFmAMAkgcDMy4yoAfuIQ&sclient=img&udm=2",
    "Gato": "https://www.google.com/search?q=gato&sca_esv=70cc93bfb03a553e&hl=es-419&biw=765&bih=714&udm=2&sxsrf=AHTn8zpbWAMo4vaPa-YyDitWjfQDfuC9aA%3A1741118865892&ei=kV3HZ9uXNq3dkPIPm6bTmA8&ved=0ahUKEwibpI2cnfGLAxWtLkQIHRvTFPMQ4dUDCBE&uact=5&oq=gato&gs_lp=EgNpbWciBGdhdG8yDRAAGIAEGLEDGEMYigUyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyCBAAGIAEGLEDMggQABiABBixAzIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBUjNCVDUA1j_BnABeACQAQCYAXqgAe0CqgEDMy4xuAEDyAEA-AEBmAIFoAKOA6gCCsICChAjGCcYyQIY6gLCAgsQABiABBixAxiDAZgDCZIHAzQuMaAHixM&sclient=img",
    "Elefante": "https://www.google.com/search?q=elefante&sca_esv=70cc93bfb03a553e&hl=es-419&biw=765&bih=714&udm=2&sxsrf=AHTn8zppyYJ5y2oIeLr9QtK84yQAsaB1tA%3A1741118897325&ei=sV3HZ6LJE-qfkPIPtYeFuQ4&oq=elef&gs_lp=EgNpbWciBGVsZWYqAggAMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMggQABiABBixAzIIEAAYgAQYsQMyEBAAGIAEGLEDGEMYgwEYigUyCBAAGIAEGLEDMggQABiABBixAzIKEAAYgAQYQxiKBTIIEAAYgAQYsQNI-RBQ8AJYkgZwAXgAkAEAmAFboAHkAqoBATS4AQHIAQD4AQGYAgWgAoMDqAIKwgIKECMYJxjJAhjqAsICBxAjGCcYyQKYAweSBwE1oAfTFg&sclient=img",
    "Jirafa": "https://www.google.com/search?q=jirafa&sca_esv=70cc93bfb03a553e&hl=es-419&biw=765&bih=714&udm=2&sxsrf=AHTn8zogHmHb8Bl7lZC2MjQqJukXSI_7Og%3A1741118923596&ei=y13HZ6CTJPbOkPIPt5-IgQ4&ved=0ahUKEwjgpM-3nfGLAxV2J0QIHbcPIuAQ4dUDCBE&uact=5&oq=jirafa&gs_lp=EgNpbWciBmppcmFmYTINEAAYgAQYsQMYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIQEAAYgAQYsQMYQxiDARiKBTIQEAAYgAQYsQMYQxiDARiKBTIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyChAAGIAEGEMYigVI4A1Q5gNYqQxwAXgAkAEAmAFcoAGVBKoBATa4AQPIAQD4AQGYAgegArwEqAIKwgIKECMYJxjJAhjqAsICBxAjGCcYyQLCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgINEAAYgAQYsQMYgwEYCpgDBZIHATegB-Af&sclient=img",
    "Conejo": "https://www.google.com/search?q=conejo&sca_esv=70cc93bfb03a553e&hl=es-419&biw=765&bih=714&udm=2&sxsrf=AHTn8zo9drr_BbtPkB7waBVQO7GR-_1FBQ%3A1741118945131&ei=4V3HZ7jdB9qnkPIPuJbMsAI&ved=0ahUKEwj40fHBnfGLAxXaE0QIHTgLEyYQ4dUDCBE&uact=5&oq=conejo&gs_lp=EgNpbWciBmNvbmVqbzIQEAAYgAQYsQMYQxiDARiKBTIQEAAYgAQYsQMYQxiDARiKBTINEAAYgAQYsQMYQxiKBTIQEAAYgAQYsQMYQxiDARiKBTIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMgsQABiABBixAxiDAUiXEFDkAlj8DXABeACQAQCYAW-gAcEEqgEDNC4yuAEDyAEA-AEBmAIHoALnBKgCCsICChAjGCcYyQIY6gLCAgcQIxgnGMkCwgIKEAAYgAQYQxiKBcICDhAAGIAEGLEDGIMBGIoFwgIKEAAYgAQYsQMYCpgDBZIHAzQuM6AHoSQ&sclient=img",
    "Ratón": "https://www.google.com/search?q=raton&sca_esv=70cc93bfb03a553e&hl=es-419&biw=765&bih=714&udm=2&sxsrf=AHTn8zpeY21FCnyiab2TefHf-AEGmTAWAQ%3A1741118972731&ei=_F3HZ8e1LPvDkPIPsbaBkAg&ved=0ahUKEwjHo4bPnfGLAxX7IUQIHTFbAIIQ4dUDCBE&uact=5&oq=raton&gs_lp=EgNpbWciBXJhdG9uMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMggQABiABBixAzIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIIEAAYgAQYsQMyCBAAGIAEGLEDSK8QUNQCWJMOcAJ4AJABAJgBbKAB9QaqAQM5LjG4AQPIAQD4AQGYAgygArQHqAIKwgIQEAAYgAQYsQMYQxiDARiKBcICBhAAGAcYHsICCxAAGIAEGLEDGIMBwgIHECMYJxjJAsICBRAAGIAEwgIKEAAYgAQYsQMYCsICDhAAGIAEGLEDGIMBGIoFwgIKECMYJxjJAhjqApgDBIgGAZIHBDEwLjKgB748&sclient=img",
    "Burro": "https://www.google.com/search?q=burro&sca_esv=70cc93bfb03a553e&hl=es-419&biw=765&bih=714&udm=2&sxsrf=AHTn8zrQJqbYHnEwj-Y1w35tz2MAJkPGbQ%3A1741119033750&ei=OV7HZ-rOLfHIkPIPmey3uQg&ved=0ahUKEwiqz5LsnfGLAxVxJEQIHRn2LYcQ4dUDCBE&uact=5&oq=burro&gs_lp=EgNpbWciBWJ1cnJvMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFMggQABiABBixAzINEAAYgAQYsQMYQxiKBTIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyBRAAGIAEMggQABiABBixA0iRC1DDBFiBCXACeACQAQCYAWqgAd4DqgEDNC4xuAEDyAEA-AEBmAIHoAKABKgCCsICChAjGCcYyQIY6gLCAgsQABiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFmAMFkgcDNS4yoAf4Fw&sclient=img",
    "Caballo": "https://www.google.com/search?q=caballo&sca_esv=70cc93bfb03a553e&hl=es-419&biw=765&bih=714&udm=2&sxsrf=AHTn8zpck80is8xstHvjTKqrDsihCOYhMw%3A1741119049765&ei=SV7HZ4C4Lq6mkPIP5pm-2Qo&ved=0ahUKEwjAgOTznfGLAxUuE0QIHeaML6sQ4dUDCBE&uact=5&oq=caballo&gs_lp=EgNpbWciB2NhYmFsbG8yDRAAGIAEGLEDGEMYigUyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyDRAAGIAEGLEDGEMYigUyDRAAGIAEGLEDGEMYigUyCBAAGIAEGLEDMg0QABiABBixAxhDGIoFMggQABiABBixAzIKEAAYgAQYQxiKBUi2DlC_BFjADHABeACQAQCYAYABoAGcBaoBAzUuMrgBA8gBAPgBAZgCCKACxgWoAgrCAgoQIxgnGMkCGOoCwgIHECMYJxjJAsICDBAAGIAEGEMYigUYCpgDBJIHAzUuM6AHwyc&sclient=img",
    "Cerdo": "https://www.google.com/search?q=cerdo&sca_esv=70cc93bfb03a553e&hl=es-419&biw=765&bih=714&udm=2&sxsrf=AHTn8zrrdbIVcYMPLSaeqfor85Mn7XAs1w%3A1741119064967&ei=WF7HZ6zhOqekkPIPjcz-uAI&ved=0ahUKEwis7YP7nfGLAxUnEkQIHQ2mHycQ4dUDCBE&uact=5&oq=cerdo&gs_lp=EgNpbWciBWNlcmRvMg0QABiABBixAxhDGIoFMhAQABiABBixAxhDGIMBGIoFMg0QABiABBixAxhDGIoFMggQABiABBixAzIKEAAYgAQYQxiKBTIFEAAYgAQyBRAAGIAEMgoQABiABBhDGIoFMgUQABiABDIIEAAYgAQYsQNIhQxQsQRY_wlwAngAkAEAmAFioAHbA6oBATW4AQPIAQD4AQGYAgegAv8DqAIKwgIKECMYJxjJAhjqAsICBxAjGCcYyQKYAwWSBwM1LjKgB8Ia&sclient=img",
    "Gallina": "https://www.google.com/search?q=gallina&sca_esv=70cc93bfb03a553e&hl=es-419&biw=765&bih=714&udm=2&sxsrf=AHTn8zq4qRht1n4BcUH8IUd4XvLSbtuNew%3A1741119081583&ei=aV7HZ9-yI4DCkPIPpM-6iQM&ved=0ahUKEwifi_qCnvGLAxUAIUQIHaSnLjEQ4dUDCBE&uact=5&oq=gallina&gs_lp=EgNpbWciB2dhbGxpbmEyDRAAGIAEGLEDGEMYigUyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyCBAAGIAEGLEDMggQABiABBixAzIQEAAYgAQYsQMYQxiDARiKBTIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQNI6RNQ_ANY4xJwAngAkAEAmAFsoAH6BaoBAzYuMrgBA8gBAPgBAZgCCqACsAaoAgrCAgoQIxgnGMkCGOoCwgIHECMYJxjJAsICCxAAGIAEGLEDGIMBwgIFEAAYgATCAgQQABgDwgIOEAAYgAQYsQMYgwEYigWYAwSSBwM2LjSgB58q&sclient=img"
}

input.addEventListener('input', function(event) {
    console.log(event.target.value); 
});

input.addEventListener('keydown', function(event) { //'keydown, evento cuando el usuario presiona Enter'
    if (event.key === "Enter") {
        buscar(); 
    }
});

function buscar() {
    const busqueda = input.value.trim(); // trim: elimina los espacios en blanco al inicio y al final de un string

    if(enlaces[busqueda]) {
        window.location.href = enlaces[busqueda];
    } else {
        alert('Elija una opción válida');
    }

    // if (busqueda === 'Perro') {
    //     window.location.href = 'https://dle.rae.es/perro';
    // } else {
    //     alert('Elija una opción válida');
    // }
}
