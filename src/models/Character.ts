import { List, Record } from "immutable";
import { Gender } from "./Gender";

export interface CharacterProps {
    id: number,
    name: string,
    status: string, // TODO enum statuses
    species: string, // TODO enum species
    type: string, // TODO enum types
    gender: Gender,
    origin: object,  // TODO location interface
    location: object, // TODO location interface
    image: string,
    episode: List<string>,
    url: string,
    created: string
}

const defaults: CharacterProps = {
    id: null,
    name: null,
    status: null, // TODO enum statuses
    species: null, // TODO enum species
    type: null, // TODO enum types
    gender: null,
    origin: null,  // TODO location interface
    location: null, // TODO location interface
    image: null,
    episode: List(),
    url: null,
    created: null
}

export const Character = Record(defaults);
