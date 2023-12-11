let langEN;
let langVN;
async function loadDataLang() {
    try {
        const responseEN = await fetch('./data/langEN.json');
        const responseVN = await fetch('./data/langVN.json');
        langEN = await responseEN.json();
        langVN = await responseVN.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function translate(currentLanguage) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentLanguage === 'en' && langEN[key]) {
            element.textContent = langVN[key];
            document.getElementById('lang').value = 'vn';
        } else if (currentLanguage === 'vn' && langVN[key]) {
            element.textContent = langEN[key];
            document.getElementById('lang').value = 'en';
        }
    });
}

var validations = {
    required: function (value) {
        return value !== '';
    },
    phone: function (value) {
        return value.match(/^\+(\d+[\s\.-]?)+$/);
    }
}

function validate() {
    let form = document.getElementById('form'),
        inputsArr = form.querySelectorAll('input'),
        errorMessage = document.querySelector(".alert.alert-danger"),
        successMessage = document.querySelector(".alert.alert-success");

    form.addEventListener('submit', function (e) {
        let i = 0;
        let currentLanguage = document.getElementById('lang').value
        while (i < inputsArr.length) {
            let attr = inputsArr[i].getAttribute('data-validation'),
                rules = attr ? attr.split(' ') : '',
                parent = inputsArr[i].closest(".mb-3.field"),
                j = 0;
            while (j < rules.length) {
                if (!validations[rules[j]](inputsArr[i].value)) {
                    e.preventDefault();
                    document.getElementById("error-alert").setAttribute("data-translate", "error-" + inputsArr[i].name + "-msg");
                    errorMessage.className = "alert alert-danger";
                    parent.className = "mb-3 field error";
                    errorMessage.innerHTML = currentLanguage === 'en' ? langEN["error-" + inputsArr[i].name + "-msg"] : langVN["error-" + inputsArr[i].name + "-msg"]
                    return false;
                }
                errorMessage.className = "alert alert-danger hidden";
                parent.className = "mb-3 field";
                j++;
            }
            i++;
        }
        e.preventDefault();
        successMessage.className = "alert alert-success";
        form.outerHTML = "";
        delete form;
    }, false)
}

loadDataLang();
validate();

const switchToSpanishButton = document.getElementById('switch-lang');
switchToSpanishButton.addEventListener('click', () => {
    let currentLanguage = document.getElementById('lang').value;
    translate(currentLanguage);
});





