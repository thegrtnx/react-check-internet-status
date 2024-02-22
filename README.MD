# ✨ SWIPE-ANIMATE

This is a [typescript](https://www.typescriptlang.org/) project created by [`Abolade Greatness`](https://github.com/thegrtnx) and [`VickyJay`](https://github.com/Victorola-coder), helping you animate text in a swipe up animation just like the one below;

![stacked](https://raw.githubusercontent.com/thegrtnx/swipe-animate/master/vid/kora.gif)

## 🔧 Installation

```bash
npm i swipe-animate

```

I'll provide support for other packages with time. Happy to collaborate with anyone. 🤝

## 😍 Features

- Easy to set up for real, you can make it work in less than 10sec!
- Super easy to customize
- Set custom duration with choice
- Create custom array of words
- Typescript supported

## The gist

- JSX

```jsx
import React from "react";
import { Swipe } from "swipe-animate";

const page = () => {
	const arrayOfWords: string[] = ["Awesome!", "Genius!", "Intelligent!", "Prodigy!", "Him!", "Amazing!", "Terrific!", "Broke!"];

	return (
		<div>
			{" "}
			<Swipe
				words={arrayOfWords}
				intervalDuration={4000}
				textSize="lg:text-5xl text-3xl"
				textColors={["green-400", "blue-500", "red-600"]}
			/>
		</div>
	);
};

export default page;
```

- TSX

```tsx
"use client";
import React from "react";
import { Swipe } from "swipe-animate";

const page = () => {
	const arrayOfWords: string[] = ["Awesome!", "Genius!", "Intelligent!", "Prodigy!", "Him!", "Amazing!", "Terrific!", "Broke!"];

	return (
		<div>
			{" "}
			<Swipe
				words={arrayOfWords}
				intervalDuration={4000}
				textSize="lg:text-5xl text-3xl"
				textColors={["green-400", "blue-500", "red-600"]}
			/>
		</div>
	);
};

export default page;
```

## 🚀 Demo

https://korahq.com/#move-money || https://simple-text-animation-gold.vercel.app/

## 🤝 Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

You can also find me on [twitter](https://twitter.com/thegrtnx) and [Linkedin](https://www.linkedin.com/in/thegrtnx). My pseudo is [thegrtnx].

## 🤐 License

Licensed under MIT
