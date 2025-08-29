// main.js

// Sayfa yüklenir yüklenmez anında çalışacak
console.log("✅ main.js başarıyla yüklendi!");

// Eğer DOM elemanlarıyla etkileşime gireceksen güvenli yöntem:
document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 DOM tamamen yüklendi, main.js çalışıyor!");
    
    // Örnek: test amaçlı body’ye bir yazı ekleyelim
    const testDiv = document.createElement("div");
    testDiv.textContent = "main.js çalışıyor!";
    testDiv.style.color = "green";
    testDiv.style.fontWeight = "bold";
    document.body.appendChild(testDiv);
});
