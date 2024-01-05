let summa = document.getElementById('summa');
let summaKzt = document.getElementById('summa-kzt');
let summaUsd = document.getElementById('summa-usd');
let summaEur = document.getElementById('summa-eur');

summaKzt.value = summa.value * 1;
summaUsd.value = summa.value * 429;
summaEur.value = summa.value * 507;

document.getElementById('what-currency').addEventListener('change', function () {

    let choiceCurrency = this.value;
    console.log(choiceCurrency);
    // document.getElementById('summa').addEventListener('change', function () {

    if (choiceCurrency == 'KZT') {
        summaKzt.value = '-';
        let summadollar = summa.value / 429;
        summaUsd.value = summadollar.toFixed(2);
        let summaEuro = summa.value / 507;
        summaEur.value = summaEuro.toFixed(2);
    } else if (choiceCurrency == 'USD') {
        let summatenge = summa.value * 429;
        summaKzt.value = summatenge.toFixed(2);
        summaUsd.value = '-';
        let summaEuro = summa.value / 1.18;
        summaEur.value = summaEuro.toFixed(2);
    }
    else if (choiceCurrency == 'EUR') {
        let summatenge = summa.value * 507;
        summaKzt.value = summatenge.toFixed(2);
        let summadollar = summa.value * 1.18;
        summaUsd.value = summadollar.toFixed(2);
        summaEur.value = '-';
    }
    // })
});
