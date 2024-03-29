# ✨ react-check-internet-status

This is a [react-typescript](https://www.typescriptlang.org/) project created by [`Abolade Greatness`](https://github.com/thegrtnx), helping you check if a device is connected to the internet or disconnected

![stacked](https://raw.githubusercontent.com/thegrtnx/react-check-internet-status/master/vid/kora.gif)

## 🔧 Installation

```bash
npm i react-check-internet-status

```

I'll provide support for other packages with time. Happy to collaborate with anyone. 🤝

## 😍 Features

- Customize position of the notification based on [react-toastify](https://fkhadra.github.io/react-toastify/introduction) positioning
- Customize the online and offline messages based on choice
- Easy to set up for real, you can make it work in less than 10sec!
- Super easy to customize
- Set custom duration with choice
- Create custom array of words
- Typescript supported

## The gist

- JSX

```jsx
import React from "react";
import { InternetStatus } from "react-check-internet-status";

const App: React.FC = () => {
	return (
		<div>
			<h1>Your App</h1>
			<InternetStatus
				position="bottom-right"
				onlineMessage="Custom online message 🌐"
				offlineMessage="Custom offline message ❌"
			/>
		</div>
	);
};

export default App;
```

- TSX

```tsx
"use client";
import React from "react";
import { InternetStatus } from "react-check-internet-status";

const App: React.FC = () => {
	return (
		<div>
			<h1>Your App</h1>
			<InternetStatus
				position="bottom-right"
				onlineMessage="Custom online message 🌐"
				offlineMessage="Custom offline message ❌"
			/>
		</div>
	);
};

export default App;
```

## ✨ Styling

```js
position = "top-left || top-right || top-center || bottom-left || bottom-right || bottom-center";
```

## 🚀 Demo

coming soon!

## 🤝 Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

You can also find me on [twitter](https://twitter.com/thegrtnx) and [Linkedin](https://www.linkedin.com/in/thegrtnx). My pseudo is [thegrtnx].

## 🤐 License

Licensed under MIT
