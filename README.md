# 📱 Mi Agenda Personal — Ionic + Angular

<div align="center">

<p>Aplicación móvil desarrollada con <strong>Ionic Framework</strong> y <strong>Angular</strong> como parte del parcial de Desarrollo de Aplicaciones Móviles.</p>

![Ionic](https://img.shields.io/badge/Ionic-7-3880FF?style=for-the-badge&logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-16-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

---

## 📋 Descripción

<p>
Esta aplicación permite gestionar una agenda de contactos personales. Fue construida implementando los tres templates principales de Ionic: <strong>Blank</strong>, <strong>List</strong> y <strong>Tabs</strong>, con navegación entre ellos usando <code>NavController</code> y el sistema de rutas de Angular.
</p>

---

## 📸 Screenshots

<div align="center">

### 🏠 Pantalla de Bienvenida — Blank
<img width="681" height="846" alt="image" src="https://github.com/user-attachments/assets/fca4c073-4f78-4a6f-aa35-539ecc9dec9d" />


<br/><br/>

### 📋 Lista de Contactos
<img width="675" height="847" alt="image" src="https://github.com/user-attachments/assets/aeb4fa0c-6188-4fd8-8aa9-33efa9eba95a" />


<br/><br/>

### 📑 Navegación por Tabs
<img width="662" height="833" alt="image" src="https://github.com/user-attachments/assets/2b15b23a-be9c-4d39-82c1-b21f53203e78" />


<br/><br/>

### 📝 Encuesta de Satisfacción
<img width="663" height="827" alt="image" src="https://github.com/user-attachments/assets/d13ef3c8-6f12-4eb6-bb3a-730e9b766de1" />


</div>



## 🗂️ Estructura del Proyecto

```
src/
└── app/
    ├── blank/               # Pantalla de bienvenida
    │   ├── blank.module.ts
    │   ├── blank.page.html
    │   ├── blank.page.scss
    │   └── blank.page.ts
    ├── list/                # Lista de contactos
    │   ├── list.module.ts
    │   ├── list.page.html
    │   ├── list.page.scss
    │   └── list.page.ts
    ├── encuesta/            # Encuesta de satisfacción
    │   ├── encuesta.module.ts
    │   ├── encuesta.page.html
    │   ├── encuesta.page.scss
    │   └── encuesta.page.ts
    └── tabs/                # Navegación por pestañas
        ├── home/            # Pestaña principal
        ├── settings/        # Pestaña de ajustes
        ├── tabs.module.ts
        ├── tabs-routing.module.ts
        ├── tabs.page.html
        └── tabs.page.ts
```

---

## 🚀 Instalación y ejecución

### 1. Requisitos previos

<p>Asegúrate de tener instalado lo siguiente antes de continuar:</p>

- [Node.js v16+](https://nodejs.org)
- Ionic CLI
- Angular CLI

### 2. Instalar Ionic y Angular

```zbash
npm install -g @ionic/cli
npm install -g @angular/cli
```

### 3. Crear el proyecto base

```zbash
ionic start miAgenda blank --type=angular
cd miAgenda
```

### 4. Generar las páginas

```zbash
ionic generate page tabs/home
ionic generate page tabs/settings
ionic generate page list
ionic generate page blank
ionic generate page encuesta
```

### 5. Instalar dependencias

```zbash
npm install
```

### 6. Ejecutar la aplicación

```zbash
ionic serve
```

<p>La aplicación estará disponible en <code>http://localhost:8100</code></p>

---

## 🗺️ Navegación

<div align="center">

```
[ /blank ]
Pantalla de Bienvenida
       |
  _____|_____
 |           |
[ /list ]  [ /tabs ]
Contactos   Agenda
           /     \
       [home]  [settings]
```

</div>

<p>El flujo principal de la aplicación es el siguiente:</p>

| Pantalla | Ruta | Descripción |
|----------|------|-------------|
| Blank | `/blank` | Pantalla de bienvenida con botones de navegación |
| List | `/list` | Lista de contactos con `*ngFor` |
| Tabs - Home | `/tabs/home` | Resumen de la agenda |
| Tabs - Settings | `/tabs/settings` | Ajustes de la aplicación |
| Encuesta | `/encuesta` | Formulario de satisfacción |

---

## 📄 Páginas

### 🏠 Blank — Pantalla de Bienvenida

<p>Página inicial de la aplicación. Contiene tres botones que navegan a las distintas secciones usando <code>NavController</code>.</p>

```zbash
# Navega a:
/list      → Ver lista de contactos
/tabs      → Ir a la agenda
/encuesta  → Encuesta de satisfacción
```

---

### 📋 List — Lista de Contactos

<p>Muestra los contactos guardados usando la directiva <code>*ngFor</code> de Angular. Cada ítem contiene nombre, teléfono y correo electrónico.</p>

```typescript
contactos = [
  { nombre: 'Ana García',     telefono: '312 456 7890', email: 'ana@email.com' },
  { nombre: 'Carlos López',   telefono: '315 234 5678', email: 'carlos@email.com' },
  { nombre: 'María Martínez', telefono: '300 987 6543', email: 'maria@email.com' },
  { nombre: 'Luis Rodríguez', telefono: '318 765 4321', email: 'luis@email.com' },
];
```

---

### 📑 Tabs — Navegación por Pestañas

<p>Organiza el contenido en dos pestañas accesibles desde la barra inferior:</p>

- **Contactos (Home):** resumen de la agenda con botón para ver la lista completa.
- **Ajustes (Settings):** toggles para notificaciones y modo oscuro, y versión de la app.

---

### 📝 Encuesta de Satisfacción

<p>Formulario de 4 preguntas para evaluar la experiencia del usuario:</p>

| # | Tipo | Pregunta |
|---|------|----------|
| 1 | ⭐ Estrellas | ¿Cómo calificarías la app? |
| 2 | 🔘 Radio buttons | ¿Qué aspecto te gustó más? |
| 3 | 📊 Segmento | ¿Recomendarías esta app? |
| 4 | 💬 Textarea | ¿Tienes algún comentario? |

<p>Al enviar, muestra una pantalla de confirmación con el resumen de las respuestas.</p>

---

## 🛠️ Tecnologías utilizadas

<div align="center">

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Ionic Framework | 7 | Componentes UI móviles |
| Angular | 16 | Framework frontend |
| TypeScript | 5 | Lenguaje principal |
| Angular Router | — | Navegación entre rutas |
| NavController | — | Navegación programática |
| FormsModule | — | Manejo de formularios |

</div>

---

## ⚠️ Solución a errores comunes

<details>
<summary><strong>❌ "ionic: command not found"</strong></summary>

```zbash
npm install -g @ionic/cli
```

</details>

<details>
<summary><strong>❌ "Cannot find module"</strong></summary>

```zbash
npm install
```

</details>

<details>
<summary><strong>❌ Pantalla en blanco al abrir</strong></summary>

<p>Abre la consola del navegador con <strong>F12 → Console</strong> y revisa el error. Generalmente es un archivo mal copiado o una ruta incorrecta en el router.</p>

</details>

<details>
<summary><strong>❌ No aparece el botón de regreso en Tabs</strong></summary>

<p>Asegúrate de que <code>home.page.html</code> tenga el componente <code>&lt;ion-back-button defaultHref="/blank"&gt;</code> dentro del <code>&lt;ion-toolbar&gt;</code>.</p>

</details>

---

## 👤 Autor

<div align="center">

**Yubán Hilarión**
<p>Estudiante de Desarrollo de Software</p>

</div>

---

<div align="center">
<p>Desarrollado con ❤️ usando Ionic + Angular</p>
</div>
