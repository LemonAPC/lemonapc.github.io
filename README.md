# **LemonAPC**
- Reject alert(), prompt(), confirm(). Use **LemonAPC**.
---
## ***HOW TO INSTALL***
### **JavaScript**
- First, create a link tag with its rel as stylesheet and href as the url to the theme you want.
```javascript
const lemonAPCcss = document.createElement('link');
lemonAPCcss.rel = 'stylesheet';
lemonAPCcss.href = 'url/to/theme';
document.head.appendChild(lemonAPCcss);
```
- Then, import the module with import(). (Make sure your script is treated as a module)
```javascript
let lemonAPC;
import('url/to/lemonAPC')
   .then(module => {
      lemonAPC = module.lemonAPC;
   });
```
- And you're done! You now have LemonAPC in your project!
---
## ***NOTE***
- A theme is **required** for it to work.
---
### Library files
#### **Minified JS File**
```
https://lemonapc.github.io/dist/lemonAPC.min.js
```
#### **Normal JS File**
```
https://lemonapc.github.io/dist/lemonAPC.js
```
---
### Themes
***Default Theme:***
```html
<link rel="stylesheet" href="https://lemonapc.github.io/themes/default.css">
```

***Dark Theme:***
```html
<link rel="stylesheet" href="https://lemonapc.github.io/themes/dark.css">
```

***Soft Theme:***
```html
<link rel="stylesheet" href="https://lemonapc.github.io/themes/soft.css">
```

***Blueglow Theme:***
```html
<link rel="stylesheet" href="https://lemonapc.github.io/themes/blueglow.css">
```

***woke Theme:***
```html
<link rel="stylesheet" href="https://lemonapc.github.io/themes/woke.css">
```

***Turtle Theme:***
```html
<link rel="stylesheet" href="https://lemonapc.github.io/themes/turtle.css">
```