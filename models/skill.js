const skills = [
    {skill: 'CSS', proficient: true},
    {skill: 'HTML', proficient: true},
    {skill: 'JS', proficient: true},
    {skill: 'PYTHON', proficient: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne (id) {
    return skills[id];
}