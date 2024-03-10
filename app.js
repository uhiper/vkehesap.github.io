// Hesaplama butonunu seçin
var calculateButton = document.getElementById('calculateButton');

// Hesaplama butonuna tıklandığında calculateBMI fonksiyonunu çağırın
calculateButton.addEventListener('click', function(event) {
    calculateBMI(event);
});

function calculateBMI(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

    var boy = parseFloat(document.getElementById('boy').value);
    var kilo = parseFloat(document.getElementById('kilo').value);
    var yas = parseInt(document.getElementById('yas').value);
    var cinsiyet = document.getElementById('cinsiyet').value;

    // Kullanıcı girdilerini kontrol et
    if (isNaN(boy) || isNaN(kilo) || isNaN(yas) || cinsiyet === "") {
        alert("Lütfen tüm bilgileri doğru bir şekilde girin.");
        return;
    }

    // Cinsiyet seçimi yapıldığını doğrula
    if (cinsiyet !== "erkek" && cinsiyet !== "kadin") {
        alert("Lütfen cinsiyet seçiminizi yapın.");
        return;
    }

    // Geçersiz boy, kilo veya yaş değerlerini kontrol et
    if (boy <= 0 || kilo <= 0 || yas <= 0) {
        alert("Lütfen geçerli boy, kilo ve yaş değerleri girin.");
        return;
    }

    var bmi = kilo / ((boy/100) * (boy/100));
    var resultDiv = document.querySelector('.result');
    var resultText = '<h2>Vücut Kitle Endeksiniz: ' + bmi.toFixed(2) + '</h2>';

    // VKİ durumunu belirle
    if (bmi < 18.5) {
        resultText += '<p><i class="fas fa-exclamation-circle"></i> Durum: Zayıf</p>';
    } else if (bmi >= 18.5 && bmi <= 24.99) {
        resultText += '<p><i class="fas fa-check-circle"></i> Durum: Normal Ağırlıkta</p>';
    } else if (bmi >= 25 && bmi <= 29.99) {
        resultText += '<p><i class="fas fa-exclamation-triangle"></i> Durum: Kilolu</p>';
    } else if (bmi >= 30 && bmi <= 34.99) {
        resultText += '<p><i class="fas fa-exclamation-triangle"></i> Durum: 1. Derece Obezite</p>';
    } else if (bmi >= 35 && bmi <= 39.99) {
        resultText += '<p><i class="fas fa-exclamation-triangle"></i><i class="fas fa-exclamation-triangle"></i> Durum: 2. Derece Obezite</p>';
    } else if (bmi >= 40) {
        resultText += '<p><i class="fas fa-exclamation-triangle"></i><i class="fas fa-exclamation-triangle"></i><i class="fas fa-exclamation-triangle"></i> Durum: 3. Derece Obezite</p>';
        
    } else {
        resultText += '<p><i class="fas fa-question-circle"></i> Durum: Belirsiz</p>';
    }

    resultDiv.innerHTML = resultText;
    resultDiv.style.display = 'block';

    var formDiv = document.querySelector('.container form');
    formDiv.style.marginRight = '0px';
}

function scrollToResult() {
    var resultDiv = document.querySelector('.result');
    var offset = resultDiv.offsetTop;
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}

calculateButton.addEventListener('click', function(event) {
    calculateBMI(event);
    scrollToResult();
});
