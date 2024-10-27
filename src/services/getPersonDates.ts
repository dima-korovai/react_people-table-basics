import { useContext } from 'react';
import { PeopleContext } from '../store/PeopleContent';

export function GetPersonDates(personName: string | null, parent: string) {
  const { people } = useContext(PeopleContext);

  if (parent === 'mother') {
    const motherOfKid = people.find(personEl => personEl.name === personName);

    if (!motherOfKid) {
      return;
    }

    const motherBirthDate = motherOfKid?.born;

    const motherNameDivided = motherOfKid?.name
      .split(' ')
      .join('-')
      .toLowerCase();

    const motherDates = motherNameDivided + '-' + motherBirthDate;

    return motherDates;
  } else if (parent === 'father') {
    const fatherOfKid = people.find(personEl => personEl.name === personName);

    if (!fatherOfKid) {
      return;
    }

    const fatherBirthDate = fatherOfKid?.born;

    const fatherNameDivided = fatherOfKid?.name
      .split(' ')
      .join('-')
      .toLowerCase();

    const fatherDates = fatherNameDivided + '-' + fatherBirthDate;

    return fatherDates;
  } else {
    return;
  }
}
