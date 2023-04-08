export default class Team {
    constructor() {

        console.log('new TEAM created');
        this.teamMembers = [{
            name: 'Лучник1',
            type: 'Bowman',
            health: 50,
            level: 1,
            attack: 40,
            defence: 10
          },
          {
            name: 'Лучник2',
            type: 'Bowman',
            health: 50,
            level: 1,
            attack: 40,
            defence: 10
          },
          {
            name: 'Лучник3',
            type: 'Bowman',
            health: 50,
            level: 1,
            attack: 40,
            defence: 10
          }];
          console.log('LENGHT: '+this.teamMembers.length);
    }

    *[Symbol.iterator] () {
        let current = 0;
        while (current < this.teamMembers.length) {
            yield this.teamMembers[current++];
        }
    }
    
}


    let team = new Team();

    let iterTeam = team[Symbol.iterator]();


    console.log(iterTeam.next());
    console.log(iterTeam.next());
    //console.log(iterTeam.next());
    //console.log(iterTeam.next());
    
  