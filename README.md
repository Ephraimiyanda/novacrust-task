This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Project Structure

- **page.tsx**: main page for app.
- **app/**: Main layout container for app.
- **components/**: Reusable UI components (CurrencyInput, SelectField, etc.).
- **types/**: TypeScript interfaces and types.
- **constants/**: Mock data for currencies and wallets. -**public/**:contains images and fonts

## 📝 Assumptions & Trade-offs

1. **Exchange Rates**:

   - The exchange rates are currently mocked and hardcoded in `ConversionForm.tsx`.
   - `Crypto -> Fiat`: 1 ETH = 150,000 NGN
   - `Fiat -> Crypto`: 1 NGN = 0.0000006 ETH
   - In a production app, these would be fetched from an api.

2. **Wallet Connections**:

   - The "Pay From" and "Pay To" fields are UI simulations.

3. **Validation**:

   - Basic validation checks if the amount is > 0 and if wallets are selected or if required fields are filled.

4. **Styling**:

   - Tailwind CSS is loaded for performance.

5. **Icons**:
   - Custom SVG icons are used to match the design closely.
