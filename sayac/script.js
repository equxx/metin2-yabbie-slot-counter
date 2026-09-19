// DCSB programının sayıları yazdığı metin dosyasının adı
// Bu dosya da aynı klasörde (index.html'in yanında) durmalı
const dosyaAdi = 'olumler.txt'; 
let eskiSayi = "000";

// Şeritlerin içine 0-9 arası dikey rakamları basan başlangıç fonksiyonu
function serifleriHazirla() {
    const strips = ['strip1', 'strip2', 'strip3'];
    strips.forEach(id => {
        const el = document.getElementById(id);
        let html = '';
        for(let i = 0; i <= 9; i++) {
            html += `<div class="digit">${i}</div>`;
        }
        el.innerHTML = html;
    });
}

// WampServer (http://localhost) üzerinden .txt dosyasını anlık okuyan fonksiyon
function sayaciGuncelle() {
    var xhr = new XMLHttpRequest();
    
    // Önemli: Tarayıcının sayıyı önbelleğe (cache) alıp eski veriyi göstermesini önlemek için sonuna zaman damgası ekliyoruz
    xhr.open("GET", dosyaAdi + "?t=" + new Date().getTime(), true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            // WampServer üzerinden okurken status 200 (Başarılı) dönecektir
            if (xhr.status === 200) {
                let yeniSayi = xhr.responseText.trim();
                
                // Eğer gelen veri sayı değilse veya boşsa işlem yapma
                if (isNaN(yeniSayi) || yeniSayi === "") return;

                // Sayıyı her zaman 3 haneli formatta (001, 025 vb.) tutma
                if (yeniSayi.length === 1) yeniSayi = "00" + yeniSayi;
                else if (yeniSayi.length === 2) yeniSayi = "0" + yeniSayi;
                else if (yeniSayi.length > 3) yeniSayi = yeniSayi.slice(-3);

                // Eğer sayı DCSB tarafından chattan veya klavyeden değiştirildiyse şeritleri kaydır
                if (yeniSayi !== eskiSayi) {
                    kaydir('strip1', yeniSayi.charAt(0));
                    kaydir('strip2', yeniSayi.charAt(1));
                    kaydir('strip3', yeniSayi.charAt(2));
                    eskiSayi = yeniSayi;
                }
            }
        }
    };
    xhr.send();
}

// Şeridi rakamın değerine göre dikeyde (84px ve katları olarak) pürüzsüz kaydıran fonksiyon
function kaydir(id, rakam) {
    const el = document.getElementById(id);
    const r = parseInt(rakam);
    el.style.transform = `translateY(-${r * 84}px)`;
}

// Sistemi ilkle ve her 300 milisaniyede bir (çok hızlı) .txt dosyasını sorgula
serifleriHazirla();
setInterval(sayaciGuncelle, 300);
sayaciGuncelle();
