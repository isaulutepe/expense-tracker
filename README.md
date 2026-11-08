# 💰 Harcama Takip Uygulaması

Bu proje, kişisel gelir ve giderlerin takip edilebilmesi amacıyla geliştirilmiş basit ve kullanıcı dostu bir harcama takip uygulamasıdır.

Uygulama sayesinde kullanıcılar gelir ve gider işlemlerini ekleyebilir, düzenleyebilir, silebilir ve finansal durumlarını tek bir ekran üzerinden takip edebilir.

Proje, Angular ve Tailwind CSS kullanılarak geliştirilmiştir. Verilerin saklanması için tarayıcının Local Storage özelliğinden yararlanılmıştır.

## 📸 Uygulama Görselleri

### Ana Sayfa (Dashboard)

![DashBoard](expense-tracker/blob/main/screenshots/anasayfa.png)


### İşlem Listesi ve Filtreleme

![Transactions](expense-tracker/screenshots/liste.png)

![Transactions](expense-tracker/screenshots/gelirFiltresi.png)

![Transactions](expense-tracker/screenshots/giderFiltresi.png)

### İşlem Ekleme

![Add_Transactions](expense-tracker/screenshots/yeniEkle.png)

### İşlem Güncelleme

![Update_Transactions](expense-tracker/screenshots/guncelle.png)

---

## 🚀 Özellikler

- **Gelir ve Gider Takibi:** Gelir ve gider işlemleri ayrı ayrı kaydedilebilir.
- **Dashboard:** Toplam bakiye, toplam gelir ve toplam gider bilgileri görüntülenebilir.
- **İşlem Ekleme:** Yeni gelir veya gider işlemleri oluşturulabilir.
- **İşlem Düzenleme:** Daha önce eklenen işlemler güncellenebilir.
- **İşlem Silme:** İstenmeyen işlemler silinebilir.
- **Filtreleme:** İşlemler tümü, gelir ve gider seçeneklerine göre filtrelenebilir.
- **Veri Saklama:** İşlemler Local Storage kullanılarak tarayıcıda saklanır.
- **Form Kontrolleri:** Boş alanların gönderilmesi engellenir.
- **Dinamik Hesaplama:** Gelir, gider ve toplam bakiye değerleri otomatik olarak hesaplanır.

## 🛠️ Kullanılan Teknolojiler

- **Angular:** Uygulamanın frontend geliştirme altyapısı.
- **TypeScript:** Uygulama içerisindeki programlama dili.
- **Tailwind CSS:** Arayüz tasarımı ve stillendirme.
- **Lucide Angular:** İkonların kullanımı.
- **Local Storage:** Verilerin tarayıcı üzerinde saklanması.

## 📁 Proje Yapısı

```text
expense-tracker/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   ├── add-transaction/
│   │   │   └── edit-transaction/
│   │   │
│   │   ├── services/
│   │   ├── models/
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.config.ts
│   │
│   ├── styles.css
│   └── main.ts
│
├── screenshots/
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## ⚙️ Kurulum ve Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz.

### Gereksinimler

- Node.js
- npm
- Angular CLI

### 1. Projeyi klonlayın

```bash
git clone REPOSITORY_URL
```

### 2. Proje klasörüne girin

```bash
cd expense-tracker
```

### 3. Gerekli paketleri yükleyin

```bash
npm install   ( Eğer eksik varsa kurulamsı gereken paket --> npm i -g @angular/cli)
```

### 4. Uygulamayı çalıştırın

```bash
ng serve
```

### 5. Tarayıcıdan uygulamaya erişin

```text
http://localhost:4200
```

## 💾 Veri Saklama

Uygulamada oluşturulan işlemler tarayıcının Local Storage alanında saklanmaktadır.

Veriler JSON formatına dönüştürülerek kaydedilir ve uygulama tekrar açıldığında Local Storage üzerinden okunarak kullanıcıya gösterilir.

Uygulama herhangi bir backend veya veritabanı kullanmamaktadır.

## 🎯 Projenin Amacı ve Kazanımlar

Bu proje geliştirilirken Angular framework'ünün temel özelliklerini öğrenmek ve uygulamalı olarak kullanmak amaçlanmıştır.

Proje sürecinde aşağıdaki konularda deneyim kazanılmıştır:

- Angular Standalone Components yapısı
- TypeScript kullanımı
- Angular Signals ve Computed Signals
- Component tabanlı mimari
- Dependency Injection
- Service kullanımı ve veri yönetimi
- CRUD işlemleri
- Local Storage kullanımı
- Form yönetimi ve doğrulama
- Tailwind CSS ile arayüz geliştirme
