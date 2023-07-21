function skillsMember() {
    let member = {
        name: 'John',
        age: 30,
        skills: ['JS', 'React', 'Node']
    };
    for (let key in member) {
        if (key === 'skills') {
            console.log(member[key]);
        }
    }
}