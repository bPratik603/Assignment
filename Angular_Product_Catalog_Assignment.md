# 🚀 Frontend Developer Assignment  
## Dynamic Multi-Category Product Catalog (Angular Version)

---

## 🎯 Objective  
Build a **responsive Angular application** that dynamically renders a **multi-category product catalog** from a JSON dataset.

The goal is to demonstrate:
- Dynamic UI rendering  
- Component-driven architecture  
- Clean and scalable Angular structure  

---

## 📦 Dataset  
Use the provided JSON structure:

```json
{
  "itemname": "string",
  "category": "string",
  "image": "string",
  "itemprops": [
    {
      "label": "string",
      "value": "string"
    }
  ]
}
```

---

## 🧩 Features  

### 1️⃣ Home Screen (Category Overview)
- Display all categories (Cars, Bikes, Phones, Computers)
- Group items by category
- Show preview cards (3–5 items per category)
- Each category section should include:
  - Title
  - Item cards with image + name

---

### 2️⃣ Category Page (Recommended)
- Show all items belonging to a selected category
- Optional:
  - Sorting
  - Filtering

---

### 3️⃣ Item Detail Page (Mandatory)
- Navigate to detail view on item click
- Display:
  - Image
  - Item name
  - Category label

### 🔥 Dynamic Rendering Requirement
- Iterate through `itemprops`
- Render all properties dynamically
- No hardcoded fields

---

## 🧠 Tech Stack  

- Angular (Latest version recommended)
- TypeScript
- HTML + CSS / SCSS

---

## 📱 Responsiveness  
Ensure the UI works on:
- Mobile  
- Tablet  
- Desktop  

---

## 🧱 Suggested Project Structure  

```
src/
 ├── app/
 │   ├── components/
 │   │    ├── category-card/
 │   │    ├── item-card/
 │   │    ├── item-detail/
 │   │
 │   ├── pages/
 │   │    ├── home/
 │   │    ├── category/
 │   │    ├── detail/
 │   │
 │   ├── services/
 │   │    ├── data.service.ts
 │   │
 │   ├── models/
 │   │    ├── item.model.ts
 │   │
 │   ├── app-routing.module.ts
 │   ├── app.module.ts
```

---

## 🔀 Routing  

Use Angular Router for navigation:

- `/` → Home page  
- `/category/:name` → Category page  
- `/item/:id` → Item detail page  

---

## 🔁 State Management  

- Use Angular services for data sharing  
- Optional:
  - RxJS BehaviorSubject  
  - NgRx (bonus)

---

## ✨ Bonus Features  

- 🔍 Search functionality  
- 🎯 Category filters  
- 🌙 Dark mode  
- ⚡ Lazy loading modules  
- 🧠 Performance optimization  
- ❤️ Wishlist feature  

---

## 📊 Evaluation Criteria  

| Criteria | Expectations |
|--------|-------------|
| UI/UX | Clean and intuitive |
| Code Quality | Modular and readable |
| Dynamic Rendering | Proper handling of itemprops |
| Responsiveness | Works on all devices |
| Architecture | Well-structured Angular app |

---

## 📁 Deliverables  

- GitHub repository  
- Live demo (Netlify / Vercel)  
- README with:
  - Setup steps  
  - Screenshots  
  - Approach explanation  

---

## ⚠️ Important Notes  

- ❌ Do not hardcode item properties  
- ✅ Must support new categories dynamically  
- ✅ Focus on scalability  

---

## 🧪 Edge Cases to Handle  

- Empty `itemprops`  
- Missing fields  
- Unknown categories  
- Large datasets  

---

## ▶️ Setup Instructions  

```bash
# Install dependencies
npm install

# Run the app
ng serve

# Build for production
ng build
```

---

## 💡 Tip  

Focus on writing reusable components and making your UI adaptable to any dataset.
