# React

# Bölüm-1

- **separation of concerns - Endişelerin ayrılması**
    
    Endişelerin ayrılması, programlamada yaygın olarak kullanılan bir kavramdır. Farklı eylemleri gerçekleştiren mantığın bir arada gruplandırılmaması veya birleştirilmemesi gerektiğini belirtir.
    
    Endişelerin ayrılması, tüm HTML kodunu ve tüm JavaScript mantığını tutan büyük bir dosyaya sahip olmak yerine kod tabanımızı küçük ve yönetilebilir tutmamıza yardımcı olur.
    
- **Reusability -Tekrar Kullanılabilirlik**
    
    React'te kodun yeniden kullanılabilirliği, bir uygulamanın farklı bölümlerinde ve hatta farklı uygulamalarda paylaşılabilen yeniden kullanılabilir kod yazma pratiği anlamına gelir. Geliştiricilerin zamandan tasarruf etmesine, hataları azaltmasına ve uygulamalarının ölçeklenebilirliğini ve sürdürülebilirliğini geliştirmesine yardımcı olur.
    
    Yeniden kullanılabilir yapı taşlarına sahip olmak, tekrardan kaçınmamıza yardımcı olur.
    
- **declarative approach - bildirimsel yaklaşım**
    
    React, componentleri oluşturmak için bildirimsel yaklaşım adı verilen bir şey kullanır. 
    
    Temel olarak React ile, Vanilla JavaScript ile yapacağınız gibi, React'e belirli bir HTML öğesinin oluşturulması ve kullanıcı arayüzünde belirli bir yere yerleştirilmesi gerektiğini söylemeyeceğiniz anlamına gelir. 
    
    örneğin sadece JavaScript ile. React yerine ve bu gerçekten önemlidir, her zaman istenen son durumu, hedef durumu veya farklı koşullara bağlı olarak muhtemelen farklı hedef durumları tanımlayacaksınız ve o zaman gerçek web sayfasında hangi öğelerin eklenmesi gerekebileceğini bulmak React'in işidir. kaldırıldı veya güncellendi.
    
    Basit bir ifadeyle, bildirime dayalı programlama, kodunuzun ne olmasını istediğinizi göstermesidir.
    
    Zorunlu programlama kodunuz, olmasını istediğiniz şeyi tam olarak nasıl yapacağınızı gösterir.
    
    Evinizde ahşap boyalı kapılarınız ve süslemeleriniz varsa ve daha modern görünmeleri için beyaza boyanmalarını istiyorsanız. Ressamlara açıklayıcı bir şekilde "Kapıları ve döşemeleri parlak, beyaz ve pürüzsüz istiyorum" derdiniz.
    
    Onlara 180'lik zımpara ile zımpara yapmayı, fındık fırçası kullanmayı ve katlar arası 37 dakika kuruma süresi ile 5 kat yapmayı söylemezsiniz.
    
    Tek istediğin nihai sonuç. "Parlak, Beyaz ve Pürüzsüz".
    
    React böyle çalışır. Sayfanın görüntülendiğinde nasıl görünmesini istediğinizi söylemek için kodunuzu kullanırsınız.
    

- **JSX**
    
    Temelde JavaScript içerisindeki HTML kodudur.
    
    JSX, React'te HTML yazmamıza izin verir.
    
    JSX, React'te HTML yazmayı ve eklemeyi kolaylaştırır.
    
    ```jsx
    // JSX ile; 
    const myElement = <h1>I Love JSX!</h1>;
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
    ```
    
    ```jsx
    // JSX olmadan;
    const myElement = React.createElement('h1', {}, 'I do not use JSX!');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
    ```
    
    > **ÖZETLE**
    > 
    > 
    > İlk örnekte de görebileceğiniz gibi JSX, HTML'yi doğrudan JavaScript kodunun içine yazmamıza izin veriyor.
    > 
    > JSX, ES6 tabanlı JavaScript dilinin bir uzantısıdır ve çalışma zamanında normal JavaScript'e çevrilir.
    > 

---

JSX de birden fazla satır kullanımına izin verilmez. Bu yüzden bir sarmalayıcı kök div kullanılabilir.

```jsx
function ExpenseItem() {
  return (
  //JSX birden fazla satıra izin vermez. 
	//Bunun ayrıntısı verilecek ancak şu anda bunun çözümü için bütün HTML kodlarını bir div'e sarmak.
  <div>
    <div>Date</div> 
    <div>
        <h2>Title</h2>
        <div>Amount</div>
        </div>
  </div>
  );
}
export default ExpenseItem;
```

---

React genel anlamda HTML CSS ve JavaScript birleşimidir.

JSX dediğimiz kısım aslında kodun Html kısmıdır. CSS ise bu kodlara stil eklemesidir. İşin JavaScript kısmına gelinirse;

```jsx
const expenseDate = new Date(2023, 2, 28); 
//2023 mart ayının 28'i (aylar 0 dan başlayarak atanıyor.)

// JSX birden fazla satıra izin vermez. Bunun ayrıntısı verilecek ancak şu anda bunun çözümü için bütün HTML kodlarını bir div'e sarmak.
    <div className="expense-item">
{/* normalde bu şekilde yazdığımız JSX kodlarının farklı bir yöntemi olarak süslü parantez kullanarak içerisinde temel Javascript kodları yazılabilir.
Örneğin {1+1} yazılırsa bu normal javascript kodu olarak çalıştırılarak sonuç gösterilir. */}
      <div>{expenseDate.toISOString()}</div>
//Bu yöntem kullanılmadan da ne olduğu yazılabilir ancak bu tekrar kuy-llanılabilirlik konusunda verimli değil.
      <div className="expense-item__price">$230</div>
        
```

---

Oluşturulan tekrar eden componentleri farklı yerlerde kullanabilmek için bunu her kullanım alanı için özelleştirilmesi gerekiyor. Örneğin bir harcama listesi için içinde tarih harcamanın ne olduğu ve ne kadar olduğunu tutan bir listelleme oluşturulacağı varsayılsın. 

Burada bu listeyi tutan CSS olarak özelleştilmiş (farklı dataalr kullanılarak) componenti her bir liste elemanı için kullanmanın yöntemi parametreleri componente göndermektir. React temel olarak aynı konsepte sahiptir ve bunlara ‘props’ denir.

Bunun için Bu özellikler App.js içerisinde tek tek de girilebilir yada verileri bulunduran bir liste oluşturulabilir.

```jsx
function App() {
// verilerin bulunduğu liste;
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <p className="App">
// Liste elemanlarını tek tek kullanmak;
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </p>
  );
}
```

Bu verileri componente almak ve orada gelen verilere göre düzenlemek;

```jsx
function ExpenseItem(props) {
 //props genel adıyla bu parametreler alınır. Ve App.js içerisinde hangi isimle kullanılıyorsa o şekilde props üzerinden burada ulaşılır.

  return (
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
         <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
```

---

Bu durumda bu kodlamanın sonunda (CSS hariç) eklenen elemanlar böyle görünecek.

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled.png)

> NOT
Tarihlerin daha düzgün görünmesi için düzenlemeler yapılabilir. 
Bunun için .toLocaleString() özelliği kullanılabilir. Bunun birden fazla özelliği ve kullanım şekli var ve bununla ilgili araştırma ve örnekler yapılabilir.
> 

```jsx
const month = props.date.toLocaleString("en-US", { month: "long" });
const year = props.date.toLocaleString("en-US", { day: "2-digit" });
const day = props.date.getFullYear();
<div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        {/* normalde bu şekilde yazdığımız JSX kodlarının farklı bir yöntemi olarak süslü parantez kullanarak içerisinde temel Javascript kodları yazılabilir.
        Örneğin {1+1} yazılırsa bu normal javascript kodu olarak çalıştırılarak sonuç gösterilir. */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
```

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%201.png)

---

Görseldeki bütün etiketlerin çerçevesi var ve bu çerçevede bir radius  ve gölgelendirme mevcut.

Bu özellikleri döne döne css olarak yazmak yerine kapsayıcı etikete bir kere atayarak bunu component olarak kullanırsak;

```jsx
//bir card komponenti oluşturulur.
//Bu componentte css özelliği yani radius ve shadow eklenir.

import "./Card.css";

function Card(props) {
  return <div class="card">{props.children}</div>;

  //  children özel bir isimdir.
  //  Açılış ve kapanış etiketi arasındaki içerik props.children da mevcut olacak
}

export default Card;
// Children özelliği kullanılmazsa tüm özellikleri yutan bir görsel oluşur kodun altında gösterildiği gibi
```

children kullanılmadan;

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%202.png)

children kullanıldıktan sonra;

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%203.png)

Ögeleri gösteriyor ancak bozuk bir şekilde. Bunun nedeni bazı stillerin ayıklanmış olmasıdır.

Bunu düzletmek için Card componentte kod değiştirilmeli. 

```jsx
import "./Card.css";

function Card(props) {
	const classes = 'card' + props.className;
  return <div className={classes}>{props.children}</div>;
}
```

Burada dışarıdan bir sınıf adı olarak alım yapıyoruz. Ve bunu dinamik olarak kullanıyoruz.

Bu işlemle props adlı sınıfta ayarlanan her bir değer bu sınıf adları dizisine eklenir. Bununla birlikte görüntü düzenlenmiş olur.

Bunu kullanmak için Expensenses ve ExpenseItem componentleri içindeki sarmalayıcı div yerine bu component kullanılarak düzeltilir.

```jsx
return (
   //Card div yerine kullanılır ve children ile class düzenlemelerinden dolayı 
	// diğer elementlerin de css özellikleri kaybolmaz.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
```

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%204.png)

> Bununla Ne Kazandık?
Bu şekilde kullanımlarla kod çoğaltmaların tekrarların önüne geçilebilir.
Div bileşeni yerine component kullanılarak aslında sadece CSS kodu değil HTML kodunu da çıkarabildik.
Tabiki bunlar daha komplex JSX yapısına sahip olabilir. Örneğin models ve alertler. Bu durumda çıkartmalar yapılırsa fazlaca kod tasarrufu sağlanabilir.
> 

### Bazı soru cevaplar

- React.js kullanırken ne tür kodlar yazılır?
    
    Bildirime dayalı Declarative JavaScript kodu
    
    - declarative vs imperative
        
        **imperative** (procedural, OOP etc.) ****and **declarative**(functional etc.).
        
        Popular examples of declarative languages are database query languages such as SQL, markup languages like HTML and CSS, and *functional* and *logic* programming languages.
        
    
- "JSX" nedir?
    
    React projelerinde etkinleştirilen özel, standart olmayan bir söz dizimidir.
    
- React neden tamamen "Bileşenler" ile ilgili?
    
    Her kullanıcı arabirimi birden çok yapı taşından bileşenden oluşur. Bu nedenle kullanıcı bileşenlerinin kombinasyonu olarak düşünmek mantıklıdır.
    
- declarative nedir?
    
    İstenen sonuç tanımlanır ve kitaplığın (burada React) adımları belirlemesine izin verilir. 
    
- React Component nedir?
    
    Genellikle görüntülenmesi gereken HTML (JSX) kodunu döndüren bir JavaScript işlevidir.
    
- Component Tree- Bileşen ağacı nedir?
    
    Birden çok bileşene sahip bir kok düğüm olduğu anlamına gelir.
    
- React bileşenlerinde (yani döndürülen JSX kodunda) dinamik verilerin çıktısını nasıl alabilirsiniz?
    
    Aralarında herhangi bir JS ifadesi ile tek kaşlı ayraçlar (açılış ve kapanış) kullanabilirsiniz**.**
    

# Bölüm -2

(events,State)

Uygulamaya bir buton ekleyelim ve bu butona basıldığında başlıklar değişecek olsun.

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%205.png)

Burada amaç state durumunu anlamak ve DOM işlemlerinin react ile nasıl yapıldığını anlamak.

```jsx
// butonun normalde eklenişi.
<button>Change Title</button>

// bu şekilde bir ekleme yapıldıktan sonra tıklamaya bir event listener eklenir.
<button onClick>Change Title </button>

// tıklandığında işlenecek olayı - fonksiyonu direkt olarak yazabiliriz.
<button onClick={() => {console.log('cliked')} }>Change Title </button>

// veya bunu return komutundan önce bir fonk olarak oluşturarak çağırabiliriz.
<button onClick={clickHandler}> Change Title{" "} </button>
// önemli olan nokta burada sadece fonk adı ile çağırmaktır. fonk parantezi koyulmaz
// koyulursa kod JSX ile ayrıştırılırken bu kod çalıştırılmayacaktır.

function clickHandler(){
     console.log("cliked");
  }
```

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%206.png)

UseState

State değişiklikleri görmemizi sağlayan bir react kitaplığı fonksiyonudur.

(state bir hooks elemanıdır.)

```jsx
import React, {useState} from 'react'
```

useState ile temelde bir tür değişken oluşturulur. Bu değişikliklerin yol açtığı işlevi tekrar çağıracak.

Bu özellik bize sonradan çağırabileceğimiz bir dizi dönderir.

ilk eleman değişkenin kendisidir. ikinci eleman bir güncelleme işlevidir.

Bu fonksiyon kullanıldığında bileşen fonksiyonunu tekrar çağırır bu yüzden işlemlerin sonucunu görürüz.

```jsx
const [title, setTitle] =useState(props.title); //isimlendirme tamamen bağımsızdır.
function clickHandler() {
    setTitle("Updated!");
    console.log(title);
  }

// bu durumda belirtilen title;
<h2>{title}</h2>
```

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%207.png)

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%208.png)

> NOT
useState kullanılırken const ile dizi elemanları kullanmamızın bir nedeni “=” ile atama yapıldığında hata alınacaktır.
Atama yaparak değer güncellemiyoruz bunun yerinde güncelleme fonksiyonunu çağırıyoruz. Yani bu değer React tarafından başka bir yerde yürütülür. 
Bu yüzden const kullanmak mantıklıdır.
> 

## Kullanıcıdan değer almak

Bunun için vanilla JavaScript kullanılır yani React olmadan JavaScript.

İşlemin tetiklenmesi için bir eventlistener kullanılır. Ve bu olayda çalışacak fonksiyon tanımlanır.

```jsx
// JavaScript kullanrak bir eventl listene rolayı bu şekilde kullanılır.
document.getElementById("").addEventListener("click",(event)=> {});

// Ancak burada bu durum bu şekilde işlenir.
const titleChangeHandler = (event) => {
    console.log(event);
  };
//bu işlemle her tetiklemede event sırası ile eklenir. (görsel-1)

console.log(event.target.value);
// Bu işlemle target özelliği içerisinde girilen değeri “value” ifadesini direkt olarak alabiliriz (görsel-2)
```

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%209.png)

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%2010.png)

> NOT

useState birden fazla şekilde bu şekilde her değer için yazılarak kullanılabilir. Ancak bir useState ile tüm değerleri de tutabiliriz.
Ancak burada dikkat edilmesi gereken nokta her bir veri eventlistener ile güncellenirken diğer değerler girilemeyeceği için kaybolmasıdır.
Bu verilerin kaybolmaması için JavaScript operatörü olan spread operatörü kullanılır.
Bu söz diziminde söylenen veri kopyalanır ancak altında girilen değerler hariç tutularak.
Altında girilen değerler girdiye göre güncellenirler.
> 

```jsx
// birden fazla useState kullanmak yerine bir defada bunu işlemek;
  const[userInput,setUserInput]=useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
  });

const dateHandler = (event) => {
    // setDate(event.target.value);
    
    //bir useState kullanılan durumda değişkeni kullanmak için;
   **setUserInput({                                
      ...userInput,                              
      enteredTitle: event.target.value,**          
      // sadece bu değer böyle güncelleyerek bırakılamaz. Aksi halde diğer iki veri kaybolur. 
      // iki verinin kaybolmaması için bu nesneleri de yönetmek gerekiyor.
      // bunun için mevcut değerleri alarak güncelleme veya kaybolma işlemi yapılmaması dağlanır.
      // bunun için de JavaScript operatörü olan sprad operatörü kullanılır.
      // Bunun için ...userInput başta olacak şekilde bu söz dizimi kullanılır.
      // bu şekilde userInput verileri kopyalanır ancak aşağısında girilen değer dışında 

    })

  };
```

Ancak bu durumda probleme neden olabilir. 

Burada bir state kullandığımız için bir önceki state değerine bağlı kalıyoruz.

Durum her güncellendiğinde bir önceki duruma (state) bağlılık var.

Bunun için sadece spread operatör şeklinde kullanmak yerine alternatif bir işlev kullanılır.

setuserInput işlevi çağırılır ve ona bir işlev iletilir. Ör: arrow fonk.

Bu iletilen fonksiyon react tarafından otomatik yürütülür ve böylece bir önceki durumun anlık görüntüsünü alır.

Ardından yeni anlık durum görüntüsü dönerilir. 

Çoğu durumda her iki yöntem de iyi çalışır. 

**Ancak;**

**React durum güncellemelerini planlar, bunları anında gerçekleştirmez.** 

**Bu nedenle teorik olarak aynı anda çok sayıda durum güncellemesi planlanırsa geçmiş bir duruma bağlı kalınabilir veya yanlış bir anlık durum görüntüsü kullanılabilir.**

**Bu yaklaşım ile React anlık durum görüntüsünün her zaman son durum anlık görüntüsü olduğunu garanti eder.** 

---

Verileri girdikten sonra ekleme işlemi için forma bir submit eventi eklenir. Çünkü ekleme işlemi yapıldığında form tetiklenir.

Bu ekleme işlemi için oluşturulan fonksiyon içerisinde expense verileri state üzerinden atanır. Ayrıca her submit işleminden sonra verilerin ekrandan temizlenmesi (girilen veriler ekleneceği için ekleme yapıldıktan sonra verilerin ınputlar içerisinde kalmaması için sıfırlamak gerekir. Bunun için ilk yöntem her state değerine boş eleman atamak. Ve bunları her input etiketinde value olarak eklemektir.

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%2011.png)

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%2012.png)

## Dinamik olarak veri ekleme

şimdiye kadar yapılan tüm kodlamalar temel olarak statikti. Bir ekleme veya filtreleme yapıldığında bunu ekranda göremiyoruz.

Bir harcama eklemek için;

```jsx
{props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
//Expenses component de ayrı ayrı expenses item yaparak verileri göndermek 
// gereksiz kod tekrarına neden oluyor.
// bunun yerine bu kod bloğu map fonksiyonu ile her gelen değeri
// tek tek fonksiyona göndererek ExpensesItem componentine yollamaya yarar.

// Ancak bu blok da ekranda bir değişiklik yapmaz sadece kod tekrarından kurtarır.
// her eklemenin ekranda görülmesi için;
// useState kullanmalıyız.

// App.js (ana komponentte) 

// Başta görülecek öylesine verileri bir Dummy listesi olarak tanımladık.
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
// useState(DUMMY_EXPENSES) olmasının nedeni bunların başlangıçta olacak veriler olması
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

// Bu ifade notlarda daha önce de gösterilmişti. 
// State in güncel olması verilerin kaybolmaması için kullanılan söz dizimidir. 
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
}
```

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%2013.png)

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%2014.png)

> NOT
kodlardaki props.items. map kısmı → App.js içerisinde props olarak gönderilen isimle aynı olmak zorundadır. (items özelliği → altı çizili olarak beriltildi.)
> 

Bu şekilde ekleme yapılıyor ancak bir sorun var. Bu eklemeler yapılırken ek bir div listenin sonuna oluşuyor. Tüm ögeler üzerinde gezinir ve güncellenir. Bu reactın genel mekanizması.

Bu performans için de iyi değildir ve bazı hatalara da yol açabilir. Bunun için kodlamaya eklenmesi gereken bir özellik var.

key özelliği ile reactın tek tek ögeleri tanımlaması sağlanabilir.

```jsx
{props.items.map((expense,index) => ( 
// index değeri id değeri yerine gönderilmek istenirse böyle alınabilir.
          <ExpenseItem
            key={expense.id} 
// id olarak buraya gönderilecek benzersiz bir değer yoksa dizinin index numarası gönderilebilir.
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
```

 Bu ekleme ile daha verimli bir kod yazılmış olacak. Böylece eklenen yeni elementler sıraya göre div eklemesi şeklinde olacak. Yani en baştaki div yeni eklenene göre güncellenmez yeni element başa eklenir.

# Bölüm -2

## Styled-Components

Styled component bir pakettir. 

İçeriğinde kendilerine belirli stiller eklenmiş bileşenler bulunur ve sadece bağlı olduğu bileşeni etkiler. Diğer componentler etkilenmez.

Bunu kullanmak için paketin kurulması gerekiyor. 

kurulması için komut;

```jsx
npm install --save styled-components
```

Bu indirme işleminden sonra bu paketi kullanmak için button component üzerinden örnek verelim;

```jsx

//import React from 'react'; Burada JSX kullanılmıyor artık bunu da kaldırabiliriz

import styled from 'styled-components';

// import './Button.css'; kendi css sayfasını kaldırdık ve styled component paketini ekledik.

const Button=styled.button`
	font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  .&:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// backticks için "altgr" + "," kullanılır. 
// Bu paketin yada react özelliği değildir. Bu bir JavaScript özelliğidir. "literal templates"
// burada button üzerinden gösterdim ama bütün HTML ögeleri için uygulanabilir.
// styled.h1 gibi bütün html ögeleri kullanılır. 

// Bu ifade backtick içerisinde verdiğimiz stilleri içeren bir buton döndürecek
// ifade olarak istediğimiz css ifadeleri eklenir. Ancak .button gibi sınıf özelliklerinin olmasına gerek yok.
// Bunun yerine button sınıfını içeren ilk ifade kaldırılır ve button:hover gibi ifade yerine
// buttona "&" ifadesi kullanılır.
// Bu özel bir durum 

// eski button component içinde bulunanlar;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
```

Tüm bu işlemlerden sonra program aynı şekilde çalışır.

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%2015.png)

### Medya sorgusu

Bu uygulamanın ya da yapılan uygulamanın telefon ekranında da düzgün çalışması gerekir. Kenarlardan taşmaması, ögenin görünmemesi gibi sorunlar yaşanmamalı.

Bu medya sorgusunu yapmak aslında çok basit.

Yine buton componentinde örnek verirsek. 

```jsx
import styled from "styled-components";

const Button = styled.button`
	width: 100%;
//Bu width ifadesi butonu büyültecek daha net görmek için -yeni eklendi-.
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

	@media (min-width: 768px){
    width:auto;
  }

  &:focus {
    outline: none;
  }

  .&:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
export default Button;
```

> @media (min-width: 768px){
    width:auto;
  }
> 

sorgusu emdya sorgusudur ve bu örnek büyük ekranda çalışır. Ekran büyükse belirtilen pixel aralığındaysa o durumda tamamen kaplayan buton kullanılacak ancak daha küçük bir ekran olduğunda otomatik olarak ayarlanacak. 

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%2016.png)

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%2017.png)

## CSS modules

Component modülü Reactta desteklenen bir yapıdır.

CSS modüllerini kullanmak için normal Button.js dosyasında css dosyasını import ederken farklı bir yöntem izlenir;

> import styles from ‘./Button.css’;
veya 
import classes from ‘./Button.css’;
> 

Ayrıca CSS dosyasının ismine de “module” ifadesi eklenmeli.

> Button.module.css
> 

Bu işlemden sonra css dosyasının import kısmı da değiştirilir.

import edilen isme göre .js dosyasında dinamik bir şekilde çağırma yapılır.

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%2018.png)

CSS Modules ne işe yarar?

CSS dosyasındaki sınıfları alarak temel olarak bu sınıf adlarını benzersiz olarak değiştirir.

Her bileşen için sınıf adlarını değiştirir (aktarılan css dosyası dışında). CSS dosyasındaki özellikleri korur ancak bunu başka bir sınıf adında sarar. 

> NOT:
Aynı işlem diğer css dosyaları için de uygulanır.
Ancak form kısmında class isimleri form-control şeklinde olan. Bu ve bunun benzeri isimlendirmeleri atarken [’’] ifadesi içerisinde belirtiriz. 
CSS içerisindeki sınıf isimleri de değiştirilebilir ancak bu ifade JavaScriptte geçerlidir.
> 

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%2019.png)

Bu div içerisinde bir kontrol işlemi gerçekleştiriliyordu. (isvalid?)

Bunu sağlamak için de yine backtick kullanılarak ifade edilir.

### CSS module ile medya sorguları

Önceki gibi media sorgusu CSS dosyasına taşınır ancak tek bir farklı var .

Daha öncesinde button.js dosyasında çalıştırılan koddan farkı olarak bir seçiçi (selector) eklememiz gerekiyor. çünkü CSS in her zaman bir selectore ihtiyacı var. 

önceki stilize edilmiş sorgu seçici olmayan bir söz dizimine sahip. 

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%2020.png)

# Debugging React Apps

React DevTools → React uygulamasını daha iyi hale getirmeye ve reacta özgü problemleri anlamaya yardımcı olacak özel bir araçtır.

Google da eklenti olarak kullanılılır.

Bunlar eklendiğinde elementler kısmında iki yeni araç eklenecek

Bunlar bileşen ve profil oluşturucu. (components, profiler)

![Untitled](React%20be2a470cc6d0426b8219386d1d7ea367/Untitled%2021.png)