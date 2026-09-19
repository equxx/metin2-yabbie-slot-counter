# Metin2 Yabbie Slot Counter (WampServer & DCSB ve Twitch chat overlay Baffler Uyumlu)

Bu proje, Metin2'de balık tutarken yakaladığınız **Yabbie Yengeçlerini** canlı yayında veya kendi ekranınızda (Baffler / OBS) slot makinesi animasyonuyla saymanızı sağlayan yerel bir web arayüzüdür.

## Özellikler
- 🎰 Rakam geçişlerinde pürüzsüz dikey kayma (slot) animasyonu sunar.
- 🦀 Metin2 orijinal Yabbie görseli ile tam uyumlu jilet gibi tasarıma sahiptir.
- 🌐 WampServer (localhost) üzerinden çalıştığı için tarayıcıların ve Baffler'ın tüm yerel dosya güvenlik engellerini (CORS) tamamen ortadan kaldırır.

## Kurulum ve Kullanım Kılavuzu

1. Bilgisayarınızda **WampServer**'ın kurulu ve çalışır (yeşil) olduğundan emin olun.
2. Bu depodaki tüm dosyaları (`index.html`, `style.css`, `script.js`, `yabbie.png`) bilgisayarınızdaki `C:\wamp64\www\sayac\` klasörünün içine atın.
3. **DCSB (Deathcounter and Soundboard)** programını açın ve sayıları yazdırdığınız `.txt` dosyasının adını `olumler.txt` yaparak tam bu klasörün içine, diğer dosyaların yanına kaydedin.
4. **Baffler** veya **OBS Studio**'yu açın.
5. Widget / Tarayıcı Kaynağı URL kısmına şu yerel linki yapıştırın:
   ```text
   http://localhost/sayac/index.html
   ```
6. Ekran boyutunu **500x150** (veya tasarımınıza göre daha küçük) olarak ayarlayın, Özel CSS kutusunu bomboş bırakın.
7. DCSB üzerinden atadığınız kısayol tuşlarına (`+` ve `-`) bastığınızda sayaç pürüzsüzce dönecektir.
