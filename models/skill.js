const skills = [
    {skill: 'CSS', proficient: true},
    {skill: 'HTML', proficient: true},
    {skill: 'JS', proficient: true},
    {skill: 'PYTHON', proficient: false}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne (id) {
    return skills[id];
}