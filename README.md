# Trello API Testi
**Trello API** E2E test projesidir. Javascript ile Jest, Axios kullanılarak geliştirilmiştir.
Test akışı aşağıdaki şekildedir.

- **Trello API** üzerinden **yeni board** oluşturulur
- Board içerisine **yeni liste** oluşturulur
- Liste içerisine **1. kart** oluşturulur
- Liste içerisine **2. kart** oluşturulur 
- Kartın (1. Kart) **adı güncellenir**
- Kart (1. Kart) **silinir**
- Kart (2. Kart) **silinir**
- Board **silinir**

## Test
Projeyi çalıştırmak için aşağıdaki adımları sırası ile takip etmeniz yeterli olacaktır.
```bash
# Repoyu kopyalıyoruz
git clone git@github.com:tugce225/trello-api-test.git

# Bağımlılıları yüklüyoruz
cd gittigidiyor-web-automation-test
npm install
# ya da
yarn install

# Testi başlatıyoruz
npm run test:run
```
