
# 🌍 Vromon Travel Website

**Live Demo:** [vromontravelwebsite.netlify.app](https://vromontravelwebsite.netlify.app/)

Vromon is a modern travel website that helps users discover popular travel destinations across Bangladesh, plan trips, and contact the team. It features smooth navigation, scroll-based animations, and a responsive layout — built using React and Tailwind CSS.

---


## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Icons**: Icons8, Emoji
- **Hosting**: Netlify

---

## 🚀 Getting Started (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/vromon-travel.git
cd vromon-travel
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧱 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx         # Top navigation bar
│   ├── Hero.jsx           # Hero section with CTA
│   ├── About.jsx          # About Vromon
│   ├── Destinations.jsx   # Popular destination cards
│   ├── Contact.jsx        # Contact info and form
│   ├── Footer.jsx         # Footer with social links
│   └── BookingForm.jsx    # Toggle form on “Book Now”
│
├── App.jsx                # Main app rendering layout
├── index.css              # Tailwind + custom CSS
└── main.jsx               # Entry point
```

---

## ✨ Features

* ✅ Smooth scrolling to sections
* ✅ Scroll animations on load
* ✅ Responsive layout (Mobile-first)
* ✅ “Book Now” form toggle
* ✅ Contact form (Name, Email, Message)
* ✅ Footer with social media icons

---

## 🔐 Known Vulnerabilities

| Issue                        | Description                                         | Recommendation                               |
| ---------------------------- | --------------------------------------------------- | -------------------------------------------- |
| No backend for form handling | Form submissions don't go anywhere                  | Integrate Netlify Forms / EmailJS / Firebase |
| No validation                | Input fields accept anything                        | Add basic validation in form                 |
| No SEO tags                  | Limited discoverability on search engines           | Add meta tags with `react-helmet`            |
| No accessibility testing     | Could be improved for screen readers and ARIA roles | Use tools like Axe DevTools                  |

---

<!-- ## 🔧 Suggestions for Future Enhancements

* Add real-time booking logic and pricing
* Use backend (Node.js, Firebase) to store user data
* Add Testimonials or Reviews section
* Add filtering by destination type (beach, mountain, forest)
* Add Google Maps integration for location pins

--- -->

##  Author

**Muaz Muhammad**
Frontend Developer & Designer
[Portfolio](https://vromontravelwebsite.netlify.app/) | [Facebook](https://www.facebook.com/profile.php?id=61551813943007)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).


