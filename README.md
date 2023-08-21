
# Madde

Proje Açıklaması: Bu projede, Express ve MongoDB kullanarak bir RESTful API oluşturulmuştur. API, kullanıcı kimlik doğrulama ve farklı bira yerleri ile ilgili verileri yönetmek için kullanılabilecek endpointler sunar.

##URL
URL : https://madde.onrender.com 

## API Kullanımı

#### Kayıt Ol

```http
  POST /register
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Gerekli**. Kullanıcı adı |
| `email` | `string` | **Gerekli**. E-mail adresi |
| `password` | `string` | **Gerekli**. Şifre |

#### Giriş yap

```http
  GET /login
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `username` | `string` | **Gerekli**. Kullanıcı adı |
| `password` | `string` | **Gerekli**. Şifre  |


#### Bira Fabrikalarını litele

```http
  GET /breweries?query=pale
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `` | `` | Parametre Yok |



breweries end pointi için sisteme giriş yapmş olmanız gerekmektedir.

  
## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/Yunus3emre/Madde.git
```

Proje dizinine gidin

```bash
  cd Madde
```

Gerekli paketleri yükleyin

```bash
  npm install
```

Sunucuyu çalıştırın

```bash
  npm run start
```

  
