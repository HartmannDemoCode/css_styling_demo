# Styling demos
## CSS
- When importing a css file into a component, importing that component into another component will also import the css file. And the css file will be applied to the entire app.
- To avoid this problem, we can use css modules. This will make the css file only apply to the component that imports it.
- Example:
    - In the css file, we can use the following syntax to make the css file only apply to the component that imports it:
    ```
    .Button {
        background-color: green;
        color: white;
        font: inherit;
        border: 1px solid blue;
        padding: 8px;
        cursor: pointer;
    }
    ```
    - In the component that imports the css file, we can use the following syntax to import the css file:
    ```
    import classes from './Button.css';
    ```
    - In the component that imports the css file, we can use the following syntax to use the css file:
    ```
    <button className={classes.Button}>Switch Name</button>
    ```

## CSS Modules
- CSS modules are a way to encapsulate CSS code and prevent it from affecting other elements of the application.
- CSS modules are a feature that allows us to write traditional CSS code and have it scoped to a specific component.
- CSS modules are written in the same way as normal CSS code, but they are imported into the component using a different syntax: `import classes from './filename.module.css';` where the `.module` part is an important part of the filename.

## Tailwind CSS
- Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
- Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.
- Install Tailwind CSS:
    - `npm install tailwindcss`
    - `npm install postcss-cli`
    - `npm install autoprefixer`
- Create a `tailwind.config.js` file:
    ```
    module.exports = {
        purge: [],
        darkMode: false, // or 'media' or 'class'
        theme: {
            extend: {},
        },
        variants: {
            extend: {},
        },
        plugins: [],
    }
    ```
- Create a `postcss.config.js` file:
    ```

### Positioning
- `position: relative;` will position the element relative to its normal position.
- `position: absolute;` will position the element relative to its first positioned (not static) ancestor element.
- `position: fixed;` will position the element relative to the browser window.
- `position: sticky;` will position the element based on the user's scroll position.
- `top: 0;` will position the element at the top of the page.

### Flexbox
- `display: flex;` will display the element as a flex container.
- `flex-direction: row;` will display the flex items as a row.
# repo auto created
