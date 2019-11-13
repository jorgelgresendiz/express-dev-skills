const skills = [
    {skill: 'CSS', proficient: true},
    {skill: 'HTML', proficient: true},
    {skill: 'JS', proficient: true},
    {skill: 'PYTHON', proficient: false}
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}