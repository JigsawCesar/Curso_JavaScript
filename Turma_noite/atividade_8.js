const prompt = require(`prompt-sync`)();

let hobby = [];

if (hobby.length == 0) {
    hobby.push(prompt(`Digite o seu hobby: `));
    hobby.push(prompt(`Digite o seu hobby: `));
    hobby.push(prompt(`Digite o seu hobby: `));
    console.log(`- Seus hobbies são: ${hobby.join(', ')}.`);
};


