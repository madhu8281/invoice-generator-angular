# Invoice Generator App (Angular)

A professional **Invoice Generator Web Application** built using **Angular**.
The application allows users to create invoices dynamically by entering customer and product details, preview the invoice in a professional format, and download it as a **PDF document**.

This project was built as part of an **Angular Developer Intern assignment**.

---

## Features

* Create professional invoices dynamically
* Add customer details (Name, Email, Address)
* Add multiple products/services
* Automatic **price × quantity calculation**
* **Grand total calculation**
* Unique **Invoice Number generation**
* Invoice **preview before download**
* Download invoice as **PDF**
* Professional **grey, white, black & red invoice theme**
* Fully **responsive design (mobile, tablet, desktop)**
* Clean **shadow-free PDF output**

---

## Invoice Details Included

The generated invoice contains:

* Company Information
* Unique Invoice Number
* Invoice Date
* Customer Details
* Product / Service List
* Price, Quantity, Amount
* Grand Total
* Additional Notes / Description
* Company Contact Information

---

## Technologies Used

* **Angular**
* **TypeScript**
* **HTML5**
* **CSS3 (Flexbox for responsiveness)**
* **html2canvas**
* **jsPDF**

---

## Project Structure

```
src
 ┣ app
 ┃ ┣ invoice
 ┃ ┃ ┣ invoice.component.ts
 ┃ ┃ ┣ invoice.component.html
 ┃ ┃ ┗ invoice.component.css
 ┃ ┣ app.component.ts
 ┃ ┗ app.module.ts
 ┗ assets
```

---

## Installation & Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/invoice-generator-angular.git
```

2. Navigate to the project folder

```bash
cd invoice-generator-angular
```

3. Install dependencies

```bash
npm install
```

4. Install PDF libraries

```bash
npm install jspdf html2canvas
```

5. Run the project

```bash
ng serve
```

6. Open in browser

```
http://localhost:4200
```

---

## How It Works

1. Enter customer details
2. Add product/service details
3. The system automatically calculates totals
4. Click **Generate Invoice**
5. Preview the professional invoice
6. Click **Download PDF**

---

## Responsive Design

The invoice layout is built using **Flexbox** and adapts to:

* Desktop
* Tablet
* Mobile devices

---

## Example Company Used

**Chiefex Technology Pvt Ltd**

Support Email: [support@chiefex.com](mailto:support@chiefex.com)

---

## Future Improvements

* GST / Tax calculation
* Invoice history storage
* Editable company details
* Invoice logo upload
* Database integration
* Multi-currency support

---

## Author

**Madhavi Lokhande**

