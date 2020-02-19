import React from "react";
import { useRefract, Aperture, toRender, ComponentEffect } from "refract-rxjs";
import { map, switchMap } from "rxjs/operators";
import { of, merge } from "rxjs";
import { List } from "immutable";
import { CharacterProps } from "../models";
import { fetchCharactersList } from "../api/character/queries";
import { Store } from "../store";

interface ApertureProps {
    characters: List<CharacterProps>
}

const characterStore = new Store<ApertureProps>({ characters: List() }); // TODO find out more appropriate way to create store

const aperture: Aperture<unknown, ComponentEffect<ApertureProps> | void> = (component) => {
    const mount$ = component.mount.pipe(
        switchMap(fetchCharactersList),
        map((characters) => characterStore.setState({ characters }))  // TODO find out more appropriate way to update store except actions
    );

    const character$ = characterStore.getState().pipe(
        map(({ characters }) => toRender({ characters }))
    );

    return merge(mount$, character$);
};  

export const CharacterContainer = () => {
    const { characters } = useRefract<unknown, ApertureProps>(aperture, null);
    if (!characters.size) {
        return null;
    }

    return (
        <div>
            <div>
                Characters: 
            </div>
            <>
                {
                    characters.map(({ name, id }) => (
                        <div key={id}>{ name }</div>
                    ))
                }
            </>
        </div>
    );
};
