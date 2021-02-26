Instructions for initializing unit tests with jest:

- [ ] Create desired destination folder and `cd` into it
- [ ] `code .` to open VS Code
- [ ] `git init` to start a new repository
- [ ] `npm init` (use the `-y` flag to default to 'yes' for all settings) to start node package manager
- [ ] `npm install jest --save-dev` to install jest and include dependency
- [ ] If VS Code doesn't prompt you to do so, then use `git ignore` to prevent 'node_modules' from being tracked by git
- [ ] Take a break and grab yourself a tea/coffee
- [ ] Once the install has finished, there should be a newly created 'package.json' file.  Open it and change the value of "test" in the "scripts" object to "jest --watch"
- [ ] In the same object, add a key-value pair of "coverage": "jest --coverage"
- [ ] Use `touch` to create a new file.  This will be where you write your tests.  Ensure the filename ends in 'test.js'
- [ ] You are now ready to start writing tests!