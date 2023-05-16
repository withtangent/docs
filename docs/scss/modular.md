# Adopting the Modular Approach

The old `@import` directive is [on its way out within SCSS](https://github.com/sass/sass/blob/main/accepted/module-system.md#timeline), and in its stead we have `@use` and `@forward`. This allows us to automatically namespace our partials and easily track where what is coming from. Your variables, mixins, functions, and other helpers are no longer available in the global namespace by default.

There are a lot of advantages to the new modular SCSS system, [this CSS-Tricks article](https://css-tricks.com/introducing-sass-modules/) will get you started, but we've listed two of the key advantages below.

## No More Prefixes

On the outset, this adds a little extra work. You now have to import a partial (called a _module_) into every partial you want to use it in, with either the `@forward` or (the more likely) `@use` directive. To workaround this, many people (and CSS frameworks) will often prefix their functions and variables (think the `bs` prefix Bootstrap uses in their CSS Custom Properties for example). However, the new modular approach means we no longer need to do that, and we always know where our variables, mixins, or other classes are coming in from.

## Improved Performance

Regardless of how many times a module is included in a partial, it only gets loaded _once_ during the compilation process, this speeds up the compiling process, reduces conflicts, and avoids duplications. This is especially noticeable as your styles grow more complex and have a bigger codebase.