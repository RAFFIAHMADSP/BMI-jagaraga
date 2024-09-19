const translations = {
    id: {
        title: 'Kalkulator BMI',
        ageLabel: 'Umur',
        genderLabel: 'Jenis Kelamin',
        maleLabel: 'Laki-laki',
        femaleLabel: 'Perempuan',
        heightLabel: 'Tinggi (cm)',
        weightLabel: 'Berat (kg)',
        resultLabel: 'BMI Anda adalah',
        modalTitle: 'Hasil BMI',
        comment: ''
    },
    en: {
        title: 'BMI Calculator',
        ageLabel: 'Age',
        genderLabel: 'Gender',
        maleLabel: 'Male',
        femaleLabel: 'Female',
        heightLabel: 'Height (cm)',
        weightLabel: 'Weight (kg)',
        resultLabel: 'Your BMI is',
        modalTitle: 'BMI Result',
        comment: ''
    }
};

function changeLanguage() {
    const lang = document.getElementById('language').value;
    const trans = translations[lang];

    document.getElementById('title').innerText = trans.title;
    document.getElementById('ageLabel').innerText = trans.ageLabel;
    document.getElementById('genderLabel').innerText = trans.genderLabel;
    document.getElementById('maleLabel').innerText = trans.maleLabel;
    document.getElementById('femaleLabel').innerText = trans.femaleLabel;
    document.getElementById('heightLabel').innerText = trans.heightLabel;
    document.getElementById('weightLabel').innerText = trans.weightLabel;
    document.getElementById('resultLabel').innerText = trans.resultLabel;
    document.getElementById('modalTitle').innerText = trans.modalTitle;
    document.getElementById('comment').innerText = trans.comment;
}

document.getElementById('language').addEventListener('change', changeLanguage);
