# MrAppy: Aplicación de Gestión de Equipos y Bienestar

[![React](https://img.shields.io/badge/Frontend-React-blue)](https://reactjs.org/) [![TypeScript](https://img.shields.io/badge/Code-TypeScript-%23007ACC)](https://www.typescriptlang.org/) [![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-38b2ac)](https://tailwindcss.com/) [![Status](https://img.shields.io/badge/Status-Development-orange)]()

## Descripción General
MrAppy es una herramienta que ayuda a los líderes de equipos a gestionar el bienestar y la moral de sus miembros. A través de un diseño moderno y funcionalidades intuitivas, los usuarios pueden registrar su estado de ánimo diario, los gerentes pueden monitorear estadísticas clave y gestionar equipos de forma efectiva.

---

## Tecnologías Utilizadas

### **Frontend**
- **[React](https://reactjs.org/):** Biblioteca para construir interfaces de usuario dinámicas y modernas.
- **[TypeScript](https://www.typescriptlang.org/):** Lenguaje tipado que mejora la productividad y evita errores.
- **[TailwindCSS](https://tailwindcss.com/):** Framework CSS para diseños rápidos y personalizables.
- **[React Router](https://reactrouter.com/):** Navegación declarativa para aplicaciones React.

### **Servicios y Estado**
- **Context API:** Gestión de estados globales como la autenticación.
- **Axios:** Cliente HTTP para interactuar con el backend.

### **Otros**
- **Lucide-react:** Paquete de íconos SVG modernos.
- **date-fns:** Manejo de fechas.

---

## Funcionalidades Principales
- **Registro de Estado de Ánimo:** Los usuarios pueden registrar su moral diaria con emojis y notas opcionales.
- **Dashboard para Gerentes:** Vista centralizada con estadísticas clave del equipo.
- **Gestión de Equipos:** Crear, invitar y visualizar miembros del equipo.
- **Reseñas del Equipo:** Los gerentes pueden leer y responder a las reseñas de sus equipos.

---

## Estructura del Proyecto

```plaintext
src/
├── assets/
│   ├── images/
├── auth/
│   ├── AuthLayout.tsx
├── components/
│   ├── FormInput.tsx
│   ├── landing/
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   ├── layout/
│   │   ├── MainLayout.tsx
│   │   ├── ManagerLayout.tsx
│   │   ├── ManagerSidebar.tsx
│   │   ├── Sidebar.tsx
├── constants/
│   ├── colors.ts
├── contexts/
│   ├── AuthContext.tsx
├── data/
│   ├── moods.ts
├── hooks/
│   ├── useAuth.ts
├── pages/
│   ├── Activity.tsx
│   ├── Calendar.tsx
│   ├── LandingPage.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Stats.tsx
│   ├── Team.tsx
│   ├── TeamMemberRegister.tsx
│   ├── manager/
│   │   ├── ManagerDashboard.tsx
│   │   ├── ManagerTeam.tsx
│   │   ├── Reviews.tsx
│   │   ├── TeamInvites.tsx
├── routes/
│   ├── AppRoutes.tsx
│   ├── ProtectedManagerRoute.tsx
│   ├── ProtectedRoute.tsx
├── services/
│   ├── api/
│   │   ├── authService.ts
│   │   ├── moodService.ts
│   │   ├── reviewService.ts
│   │   ├── teamService.ts
│   │   ├── userService.ts
├── types/
│   ├── reviews.ts
│   ├── team.ts
│   ├── typesAuth.ts
│   ├── index.ts
├── utils/
│   ├── config.ts
│   ├── iconHelper.ts
├── App.tsx
├── index.ts
├── main.tsx
```

---

## Instalación y Uso

### **Requisitos Previos**
- Node.js >= 14.x
- npm o yarn

### **Pasos para Instalar**
1. Clonar el repositorio:
   ```bash
   git clone (https://github.com/JordiLara/ITACADEMY-9.0-Ending-Project-Mr-Appy.git)
   ```
2. Instalar dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abrir la aplicación en el navegador:
   ```
   Hacer clic en la url que aparecerá tras hacer npm run dev
   ```

---

## Rutas Clave

| Ruta                     | Descripción                            |
|--------------------------|----------------------------------------|
| `/`                      | Landing Page                          |
| `/login`                 | Inicio de sesión                      |
| `/register`              | Registro de usuarios                  |
| `/activity`              | Registro de estado de ánimo           |
| `/calendar`              | Vista del calendario de estados       |
| `/manager/managerdashboard` | Dashboard de gerente                  |
| `/manager/reviews`       | Reseñas del equipo                    |
| `/manager/teaminvites`   | Gestión de invitaciones de equipo      |

---

## Próximos Pasos

- **Mejoras de UI/UX:** Ajustes adicionales basados en pruebas con usuarios.
- **Soporte Multilenguaje:** Expansión para otros idiomas.

---

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue los pasos del archivo `CONTRIBUTING.md` para enviar cambios.

---

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

Si tienes preguntas o comentarios, ¡no dudes en contactarnos! 😊

