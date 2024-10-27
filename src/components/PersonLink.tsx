import { Link, useLocation } from 'react-router-dom';
import { Person } from '../types';
import classNames from 'classnames';
import { GetPersonDates } from '../services/getPersonDates';

type Props = {
  person: Person;
};

export const PersonLink: React.FC<Props> = ({ person }) => {
  const { name, sex, born, died, slug, motherName, fatherName } = person;

  const { pathname } = useLocation();

  const onlySlug = pathname.split('/').slice(2).join();

  const mother = person.motherName ? person.motherName : '-';
  const father = person.fatherName ? person.fatherName : '-';

  const motherDates = GetPersonDates(motherName, 'mother');
  const fatherDates = GetPersonDates(fatherName, 'father');

  return (
    <>
      <tr
        data-cy="person"
        className={classNames('', {
          'has-background-warning': onlySlug === slug,
        })}
      >
        <td>
          <Link
            to={`/people/${slug}`}
            className={classNames('', {
              'has-text-danger': sex === 'f',
            })}
          >
            {name}
          </Link>
        </td>

        <td>{sex}</td>
        <td>{born}</td>
        <td>{died}</td>
        <td>
          {motherDates ? (
            <Link to={`/people/${motherDates}`} className="has-text-danger">
              {mother}
            </Link>
          ) : (
            mother
          )}
        </td>
        <td>
          {fatherDates ? (
            <Link to={`/people/${fatherDates}`}>{father}</Link>
          ) : (
            father
          )}
        </td>
      </tr>

      {/* <tr data-cy="person">
        <td>
          <a href="#/people/philibert-haverbeke-1907">Philibert Haverbeke</a>
        </td>

        <td>m</td>
        <td>1907</td>
        <td>1997</td>

        <td>
          <a className="has-text-danger" href="#/people/emma-de-milliano-1876">
            Emma de Milliano
          </a>
        </td>

        <td>
          <a href="#/people/emile-haverbeke-1877">Emile Haverbeke</a>
        </td>
      </tr>

      <tr data-cy="person" className="has-background-warning">
        <td>
          <a href="#/people/jan-frans-van-brussel-1761">
            Jan Frans van Brussel
          </a>
        </td>

        <td>m</td>
        <td>1761</td>
        <td>1833</td>
        <td>-</td>

        <td>
          <a href="#/people/jacobus-bernardus-van-brussel-1736">
            Jacobus Bernardus van Brussel
          </a>
        </td>
      </tr>

      <tr data-cy="person">
        <td>
          <a className="has-text-danger" href="#/people/lievijne-jans-1542">
            Lievijne Jans
          </a>
        </td>

        <td>f</td>
        <td>1542</td>
        <td>1582</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr data-cy="person">
        <td>
          <a href="#/people/bernardus-de-causmaecker-1721">
            Bernardus de Causmaecker
          </a>
        </td>

        <td>m</td>
        <td>1721</td>
        <td>1789</td>

        <td>
          <a className="has-text-danger" href="#/people/livina-haverbeke-1692">
            Livina Haverbeke
          </a>
        </td>

        <td>
          <a href="#/people/lieven-de-causmaecker-1696">
            Lieven de Causmaecker
          </a>
        </td>
      </tr> */}
    </>
  );
};
