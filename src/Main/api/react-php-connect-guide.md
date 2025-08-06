
# React + PHP Integration Guide (Roman Urdu)

Yeh documentation tumhein step-by-step batayegi ke React frontend ko PHP backend ke saath kaise connect karna hai using simple API.

---

## 📁 1. PHP Backend Setup (API Banana)

### ✅ Step 1: PHP File Banao

`htdocs` ya apne backend folder mein ek PHP file banao, jaise:

**`api/data.php`**

```php
<?php
header("Access-Control-Allow-Origin: *"); // React se request allow karne ke liye
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = [
        "message" => "React aur PHP connect ho gaye!",
        "status" => "success"
    ];

    echo json_encode($data);
}
?>
```

---

## ⚛️ 2. React Frontend se PHP API Call Karna

React app mein `fetch()` ka use karo PHP API ko call karne ke liye.

**`src/App.js`**

```jsx
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost/your-project-folder/api/data.php')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>React + PHP</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
```

📌 `localhost/your-project-folder` ko apne project ke actual path se replace karo.

---

## 🛡️ 3. CORS Error ka Solution

Agar CORS error aaye (browser se request block ho rahi ho), to PHP file ke upar yeh headers lagao:

```php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
```

---

## 🚀 4. Run Karne Ka Tareeqa

1. **XAMPP** ya **WAMP** ka Apache server start karo.
2. PHP file ko `htdocs` ke andar daalo (jaise: `htdocs/your-project/api/data.php`)
3. React app ko run karo:

```bash
npm start
```

4. React component mein response aayega:  
   **"React aur PHP connect ho gaye!"**

---

## ✅ Done!

Ab tum React se PHP ko call kar sakte ho. Agla step mein:
- Form data POST karna
- PHP se MySQL connect karna
- Cart ya authentication banana  
Yeh sab bhi ho sakta hai.

Agar tum chaho to main woh bhi Markdown mein bana doon. Batao bhai! 🔥
