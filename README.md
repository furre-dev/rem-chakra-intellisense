# Chakra Rem-to-Units Helper

Convert `rem` values into Chakra UI spacing units with smart completions in VS Code.

## ✨ Features

- 🔄 Instantly convert `rem` values to Chakra spacing units
- ⚡ Smart inline completions as you type
- 🧠 Supports decimals like `1.5rem`, `2.25rem`
- 🧩 Works in JavaScript, TypeScript, HTML, CSS, and React files
- ✅ Minimal syntax required — just type `rc3`, press `Ctrl+Space`, and select the suggestion


**Cursor must be at starting line when pressing Ctrl+Space, if you write rc2 the cursor whould be behind the "r".**


## 💡 Usage

Just type a value like this:

- `rc2`

Then trigger completions (e.g. `Ctrl+Space`), and you'll see suggestions like:

> `8 (chakra units, 2rem = 8 chakra size tokens)`

It will replace the full matched text (`rc2`, `rc3`, etc.) with the equivalent Chakra value (e.g., `8`, `12`).

## 🔧 Chakra Calculation Logic

This extension assumes:

- `1rem = 16px`
- Chakra spacing unit base = `4px`

So:

```
rem2 → (2 _ 16) / 4 = 8
rem1.5 → (1.5 _ 16) / 4 = 6
```

## 🛠 Supported Languages

- JavaScript
- TypeScript
- JavaScript React (`.jsx`)
- TypeScript React (`.tsx`)
- HTML
- CSS

## 📦 Installation

1. Search for **Chakra Rem-to-Units Helper** in the Extensions tab
2. Click **Install**
3. Start typing `remX` or `rcX` in your files
4. Trigger completions with `Ctrl+Space`

## 🧪 Example

Before:

```
padding: rem2;
```

After:

```
padding: 8;
```

## 🤝 Contributions

PRs and issues welcome!

---

© 2025 – Chakra Rem-to-Units Helper
