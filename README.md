# YCC Gemstone 2
This repository is meant for developing YCC Gemstone #2 for multiple developers across many workspace.

## Guideline
### Stack
This project is based on the following stack:
- View
	- Preact/React
	- Next.js

- Database
	- Firebase
		- Firestore
		- Authentication

- Utilities
	- TypeScript
	- Redux
	- Stylus (CSS Pre-processer)

Any other sub-stack is appreciately acceptable.

### Structure Guideline
Based on Next.js recommended structure combined with Atomic design and component-based.
While developing for YCC Gems please refer to these rules and follow the following structure.
- Always seperate TypeScript's logic as an external file except implementing existing logic to variable.
	eg. `interface` `type`
	```typescript
	// Should be seperate
    interface Pizza {
        size: "small" | "medium" | "large";
        price: number;
    }

    // Shouldn't be seperate
    const DisplayPizza: Pizza = new Pizza();
	```	

- Next.js
	- pages
		- Responsible for storing pages model
	- pageTypes
		- Storing any TypeScript's logic for `pages`
		- Should be name as same `pages` file which is using.
	- public
		- fonts - Storing fonts
		- images - Storing Images
		- stylus - Storing `.styl` file
	- layouts - Storing layouts file
		- [layoutName]
			- index.tsx - Main export
			- types.ts - Implement TypeScript logic
			- [layoutName].styl - Layout's style.

- components - Refer to an atomic design guideline
	- atoms
	- molecules
	- organisms

	- core (Only for component which is only use in layouts and isn't meant to be reusable)

	Each folder should be implement like layouts.

- stores - Redux store
	- index.tsx - main export, export main store here.
	- initState.ts - Defined initial state (for testing).
	- reducers.ts - Defined reducers which is combined.
	
	- reducers - Seperated reducer
		- [reducerName]
			- index.ts - Main export
			- types.ts - Reducer's type

	- selectors - Please refer to [Redux's selector guideline.](https://redux.js.org/recipes/computing-derived-data/) and [Reselect Guideline](https://github.com/reduxjs/reselect)
		- [reducerName]
			- index.ts - Main export
			- types.ts - Selector's type

- libs - Define any helpers' function here.
	- [Helpers name]

- __test__ - For testing
	- [testName].test.ts

### TypeScript strategy
To maintain readability code's style across many collaborator, please consider the following rule:
- Always put import on the top level of the file and order imports by the following order:
	- View library (React/Preact)
	- Store library (Redux)
	- Firebase
	- layouts
	- components
	- libs
	- Utility
	- Stylesheet
	- Type file

- Prevent usage of nested `if`, `bracket`, `semi-colon` and `return` where possible
	Instead of
	```typescript
	if(isLogin){
	    showProfilePage();
	} else {
	    showLoginPage();
	}
	```

	Do this instead
	```typescript
	if(isLogin)
	    return showProfilePage() // Return won't read the code underneath

	showLoginPage()
	```

	Prevent `return` on `map`, `forEach` and any other chain.
	```typescript
	// Instead of
	fruits.map(fruit => {
	    return fruit
	})

	// Using benefit of arrow function
	fruits.map(fruit => fruit)
	```

- Use `async/await` where possible:
	Don't do this
	```typescript
	const firestore = firebase.firestore()

	firestore
	    .collection("Vocaloid")
	    .document("Hatsune Miku")
	    .get()
	    .then(miku => save(miku.data()))
	```

	Do this
	```typescript
	const firestore = firebase.firestore()

	const miku = await firestore
	    .collection("Vocaloid")
	    .document("Hatsune Miku")
	    .get()

	save(miku.data())
	```

- ALWAYS use `const` on top level otherwise use `let`.
- Group same type of variable as on the same variable declaration.
	Don't do this:
	```typescript
	let [menu, updateMenu] = useState(latestMenu)
	let [price, updatePrice] = useState(0)
	```

	Do this:
	```typescript
	let [menu, updateMenu] = useState(latestMenu),
	    [price, updatePrice] = useState(0)
	```

- Each Component should only contains itself.
- Each Component should be using `export default`.

### React Guideline
This project is used `Preact` instead of `React`. `React` is aliased as `preact/compat` which mean you can almost used any library which is integrated with React.

#### Coding style
- Use terenary operator if component only contains return and has 2 or lower nested `if` statement.
	```typescript
	const Sushi = isSalmon ? 
		<SalmonSushi /> :
			isFresh ?
				<FreshSushi /> :
				<OrdinarySushi />
	```

- Group `hooks` together:
	```typescript
	let [flavour, updateFlavour] = useState("Chilly"),
		[size, updateSize] = useState("XL")
	```

- Always React Hooks except you're either extending other-library existing class or implementing `Error Boundary`.
- Use `memo` if there's no state and life-cycle.
- Use full name instead of shorten name. Eg. Re-naming `FC` to `FunctionalComponent`.
- Import Fragment instead of using `<React.Fragment>` and `<>`.
- Only use semi-colon when neccessary.
- If components could be `sliced`, slice it. (Refer to Atomic Model)

### Stylesheet Guideline
Using [Stylus](http://stylus-lang.com/), almost anything that `sass`, `scss`, `less` can do, should be implementable with stylus. If you're not familiar with `Stylus` you can install any CSS pro-processor you like.

- Refer [RSCSS Strategy](https://rscss.io) as coding style.
- Prevent usage of `semi-colon`, `comma` and `bracket`.
- Use CSS variable instead of pre-processor's variable system.
- Color variant should be defined in `/public/stylus/init.styl` for global usage and easier dark-theme implmentation.
- `padding` and `margin` should be able to be divided by 4 with no remainder.
- `font-size` should be able to be divided by 3 with no remainder.
- `button` shouldn't be used with `font-transform: uppercase`.