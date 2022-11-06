//! @nurullah hoca açıklamalı çalışması

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
// 1-Authentication  işlemleri için  importta firebase/auth yolunu kullanıyoruz, Authentication ile ilgili ne işlem var buradan import edilir
// firebase dosyasını js olarak kaydettik yeri src içinde istediğiniz yerde olabilir
//"firebase": "^9.13.0", sürümüne göre anlattık sürüm değişse bile bu sürümü yüklenebilir
//bu işlemlerden önce firebase sitesinden  console kısmında   build altında Authentication
// kısmına girip giriş işlemlerinin türlerini tanımladığınızdan emin olun  email ve şifreyle giriş , google ile giriş vs

// 2- firebaseConfig objesi bize firebase kayıtta verilen obje api vs bunun içinde bunu env içinde saklamak daha mantıklı
const firebaseConfig = {
  apiKey: "AIzaSyBN4f8Dw4LcOJQ7J8WaQ6eB7JEchKoRu2A",
  authDomain: "reactmovieapp-b301a.firebaseapp.com",
  projectId: "reactmovieapp-b301a",
  storageBucket: "reactmovieapp-b301a.appspot.com",
  messagingSenderId: "1027493718398",
  appId: "1:1027493718398:web:869061dd3acbee63fc2b2f",
};

//3- firebase servisini başlatmak için  aşağıdaki işlemle config dosyamızı initializeApp() metoduna ekleyip çalıştırmış oluyoruz
const app = initializeApp(firebaseConfig);

// 4-getAuth(app);  bize firebaseden alınacak  aktif oturum bilgilerini tutacak ana değişkenimiz olacak
// başlangıç işlemleri bukadar bundan sonra hep hazır verilen metodları kullanacağız
const auth = getAuth(app);

// 5- burada register işlemi yapılıyor, bunu yapan metod createUserWithEmailAndPassword() metodu
// biz bu metodu kendi oluşturduğumuz createUser fonksiyonuna yerleştirip onuda export yapıyoruz böylece bu metodu istediğimiz
// sayfaya çağırıp kullanabileceğiz
export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // 6- bu metod fetch tarzı çalışıp  promis döndürüyor, işlem başarılıysa yani  yeni kullanıcı eklendiyse
      // bu kısıma user bilgileri gelecek , aynı zamanda işlem başarılı bir şekilde gerçekleştiğinden artık emin olduğumuz
      //için buradan istediğimiz yönlendirme/routing işlemlerini yapabilirz.
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error); //7- işlem bir şekilde hatalı ise buradan anlıyoruz ve dönen mesaj işlemden geçirilerek ekrana yansıtılabilir
    });
};

// 8- signInWithEmailAndPassword   metoduyla email ve password ile giriş sağlanır biz yine bu metodu kendi fonksiyonumuz içine aldık ve export yaptık
// tek yapmamız gereken  çalıştıracağımız sayfada import  loginUser   yapıp   loginUser(email,password) şeklinde bu fonksiyonu çağırmak gerisi googleye düşüyor
export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(auth);
      const user = userCredential.user; // giriş başarılı olursa bilgiler yine buraya gelir
      console.log(user.email);
    })
    .catch((error) => {
      console.log(error);
    });
};

// 9- popup açılsın ve kullanıcnı  kendi google hesabını seçerek direkt bağlanarak giriş yapsın istersek
// signInWithPopup metodu kullanılır , biz bunu ve gerekli provideri loginWithGoogle fonksiyonuna attık
// sadece loginWithGoogle() fonksiyonunu çağırmak yeterli başka bir işleme gerek yok
// kullanıcı kayıtlı değilse bile buşekilde giriş yapar ve kullanıcı olarak ta kaydedilir
// tabi bu izinleri hep siz tanımlıyorsunuz isterseniz email yada sms  ile hesap onaylama ekleyebilirsiniz
export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider(); // bu kısmıda google kendi verdi biz yazmadık

  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user; // yine giriş başarılıysa buradan işlemleri yaptırabiliriz
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};

//10- signOut metoduyla çıkış işlemi yapılıyor yani firebase bizim sayfamızda aktif görüren hesabı çıkış yaptırıyor ve bizwe
// çıkış yaptı bilgisini döndürüyor
export const loginOut = () => {
  signOut(auth)
    .then(() => {
      console.log(auth); // auth bizim için çok önemli aşağıda değinelim
    })
    .catch((error) => {
      // An error happened.
    });
};
//11- auth u biz en başta kendimiz oluşturmuştuk firebase auth içine sürekli aktif olan kullanıcı bilgisini yolluyor
// ozaman biz istediğimiz zaman auth içine bakarsak aktif kullanıcı varmı anlarız
// aktif kullanıcı varsa auth içinde currentUser de bilgisi gelir
// ohalde biz istediğimiz sayfada  auth.currentUseri kontrol edersek true dönüyorsa kullanıcı aktiftir demek
//yani hala login ve işlemler için izinli.....
// auth u otomatik olarak kontrol eden metod var   onAuthStateChanged  metodu aşağıda onu kullandık

//12- onAuthStateChanged metodu hala aktif olan kullanıvıın bilgilerini verir
// biz yine loginControl isimli oluşturduğumuz fonksiyon içine yazıp export ettik ki istediğimiz yerden çağıralım
// bu onAuthStateChanged  metodunu istediğimiz sayfaya böylece import ederek direkt  kullanabiliriz ama bu şeklde  tek bir yerden çağırıp  kullanım daha pritk

export const loginControl = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user); // hiçbirşeye ihtiyacı yok sadece çalıştır ve aktif kullanıcı bilgilerini al
    } else {
      // User is signed out
    }
  });
};
