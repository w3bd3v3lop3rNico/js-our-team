const rowDOMEl = document.querySelector('.row')
const team = [
    {
        nome:'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto:'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome:'Angela Caroll',
        ruolo:'Chief Editor',
        foto:'angela-caroll-chief-editor.jpg'
    },
    {
        nome:'Walter Gordon',
        ruolo:'Office Manager',
        foto:'walter-gordon-office-manager.jpg'
    },
    {
        nome:'Angela Lopez',
        ruolo:'Social Media Manager',
        foto:'angela-lopez-social-media-manager.jpg'
    },
    {
        nome:'Scott Estrada',
        ruolo:'Developer',
        foto:'scott-estrada-developer.jpg'
    },
    {
        nome:'Barbara Ramos',
        ruolo:'Graphic Designer',
        foto:'barbara-ramos-graphic-designer.jpg'
    },
]
// console.log(team, team[0])
for (let i = 0; i < team.length; i++)  {
    // console.log(team[i])
    const membroTeam = team[i]
    console.log(membroTeam)
    const membroTeamHTML = `
    <div class="col">
        <div class="card member-card">
            <figure class="photo">
                <img src="./img/${membroTeam.foto}">
            </figure>
            <h4 class="member-name">${membroTeam.nome}</h4>
            <p class="member-role">${membroTeam.ruolo}</p>
        </div>
    </div>
    `
    console.log(membroTeamHTML)

    rowDOMEl.innerHTML += membroTeamHTML
}