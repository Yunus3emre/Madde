# Madde
 
Proje Açıklaması: Bu projede, Express ve MongoDB kullanarak bir RESTful API oluşturulmuştur. API, kullanıcı kimlik doğrulama ve farklı bira yerleri ile ilgili verileri yönetmek için kullanılabilecek endpointler sunar.

---

## Başlangıç

Bu talimatlar, projeyi yerel makinenizde çalıştırmak ve geliştirmek için gereken adımları içerir.

### Gereksinimler

Aşağıdaki yazılımların sisteminizde yüklü olduğundan emin olun:

- Node.js

### Kurulum


Gerekli bağımlılıkları yüklemek için aşağıdaki komutları çalıştırın:

bash
npm install
Veritabanı bağlantısını yapılandırmak için config/database.js dosyasını düzenleyin ve MongoDB bağlantı URL'sini ekleyin.

Sunucuyu başlatmak için aşağıdaki komutu kullanın:

bash
Copy code
npm start
Kullanım
Proje başarıyla başlatıldığında, API endpoint'leri aşağıdaki şekillerde kullanılabilir:

Kullanıcı Kaydı: POST /register - Yeni bir kullanıcı kaydı oluşturun.
Kullanıcı Girişi: POST /login - Varolan bir kullanıcı ile giriş yapın.
Bira Yerleri Listesi: GET /breweries - Bira yerlerinin bir listesini alın.
Bira Yeri Detayları: GET /breweries/:id - Belirli bir bira yerinin detaylarını alın.
Yeni Bira Yeri Ekleme: POST /breweries - Yeni bir bira yeri ekleyin.
