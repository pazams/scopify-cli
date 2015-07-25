# scopify-cli

A command line interface for [PostCSS-Scopify].
This interface will walk the current working directory and will add user input css scope to each .css file

[PostCSS]: https://github.com/postcss/postcss
[PostCSS-Scopify]: https://github.com/pazams/postcss-scopify

__Example input__

```css
.foo, .boo h1 {
    /* declarations */
}
```
__Example output__

```css
#scope .foo, #scope .boo h1 {
    /* declarations */
}
```

## Installation

```
npm install scopify-cli -g
```

## Usage (from the command line)

```
scopify-cli '#scope'
```
