# Novacrust Task - Crypto Exchange Widget

A high-fidelity, interactive crypto-to-cash exchange widget built with **Next.js 15**, **React**, and **Tailwind CSS**.

## 🚀 Setup Instructions

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Open Application**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
novacrust-task/
├── app/
    ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page rendering the Widget
├── public/              # Static assets(images and fonts)
├── components/      # UI Components (ConversionForm, CurrencyInput, etc.)
├── constants/       # Mock data and configuration constants
├── types/           # TypeScript interfaces and type definitions
│
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## 🛠 Features

- **Dynamic Tab Switching**: Seamlessly toggle between "Crypto to Cash", "Cash to Crypto", and "Loan" views.
- **Form Validation**: Ensures all fields (Amounts, Pay From, Pay To) are filled before submission.
- **Interactive UI**:
  - Custom currency selector with search.
  - Wallet dropdowns with icons.
  - Hover and active states for better UX.
- **State Management**: Handles loading states and error feedback during conversion simulation.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.

## 📝 Assumptions & Trade-offs

1. **Exchange Logic**:

   - Conversion rates are mocked for demonstration (e.g., 1 ETH = 1,500,000 NGN).
   - In a production environment, these would be fetched from a real-time price feed.

2. **Authentication & Wallets**:

   - The wallet selection is purely cosmetic.
   - Basic form validation logic for required inputs.

3. **Tech Stack**:
   - Built using Next.js App Router for modern React features.
   - Tailwind CSS used for styling to match the provided Figma/screenshot design precisely.
