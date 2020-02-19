import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { List } from 'immutable';
import { CharacterProps } from '../../models';

export const fetchCharactersList = () => (
    ajax('https://rickandmortyapi.com/api/character').pipe(
        map(({ response }) => response.results),
        map((characters: CharacterProps[]) => List.of(...characters))
    )
)
