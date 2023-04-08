import Team from '../src/app';

test('iterate Team', () => {
    let result = [];
    let team = new Team();

    let iterTeam = team[Symbol.iterator]();

    result.push(iterTeam.next().value);
    result.push(iterTeam.next().value);
    result.push(iterTeam.next().value);
    
        let exp = [{
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

          expect(result).toEqual(exp);
  });