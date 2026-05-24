# AYBÜ Biltek Web Sitesi 🚀

<div align="center">
  <img src="public/media/logo-text.png" alt="AYBÜ Biltek Logo" width="300px" />
  <p><b>Ankara Yıldırım Beyazıt Üniversitesi Bilim ve Teknoloji Topluluğu (AYBÜ Biltek) Resmî Web Sitesi</b></p>
  
  <a href="https://aybubiltek.com"><b>aybubiltek.com adresini ziyaret edin →</b></a>
</div>

---

Bu web sitesi, **AYBÜ Biltek** topluluğumuzun güncellenme ihtiyacı olan web sitesini modern standartlara taşımak amacıyla **Gridea** yazılım ekibi tarafından **React** kullanılarak geliştirilmiştir.

Topluluğumuzun tanıtımını, yönetim kurulunu, alt ekiplerini, duyurularını ve yayınladığı makaleleri tek bir çatı altında toplayan; modern, hızlı ve kullanıcı dostu bir platform olarak yayına sunulmuştur.

---

## 👥 Geliştirici Takımı

Bu proje, **AYBÜ Biltek** bünyesinde faaliyet gösteren **Gridea** yazılım ekibi tarafından tamamlanmıştır. Katkı sunan tüm ekip üyelerimize teşekkür ederiz.

---

## 💻 Geliştiriciler İçin (Geliştirme & Dağıtım)

Bu bölüm, projeyi yerel ortamda çalıştırmak, derlemek veya otomatik yayına alma süreçlerini yapılandırmak isteyen geliştiriciler içindir.

### 🔌 Yerel Geliştirme Ortamı

Projeyi kendi bilgisayarınızda çalıştırmak için:

1.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```
2.  **Geliştirme Sunucusunu Başlatmak İçin:**
    ```bash
    npm run dev
    ```
3.  **Üretim Sürümü İçin:**
    ```bash
    npm run build
    ```

### 🚀 GitHub Pages ile Otomatik Yayına Alma

Projenin her `master` branch'ine yapılan push (commit) işleminde otomatik olarak derlenip güncellenmesi için bir GitHub Actions iş akışı kurulmuştur. `master` branch'ine atacağınız her commit sonrasında web sitemiz otomatik olarak derlenip yayına alınacaktır.

*   Proje, GitHub Pages altyapısı sayesinde varsayılan olarak **[https://grideayazilim.github.io/aybubiltek.com/](https://grideayazilim.github.io/aybubiltek.com/)** adresi üzerinden yayına alınacaktır.
*   **aybubiltek.com** özel alan adını (domain) bu adrese yönlendirerek kullanıcıların doğrudan kendi alan adı üzerinden siteye erişmesini sağlıyoruz. 