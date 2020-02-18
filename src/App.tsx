import React from 'react';
import { Character } from "./models";
enum possibeValues {
    'a',
    'c',
    'b' = 'bbbbb'
}

const value: possibeValues[] = [possibeValues.b];

console.log(new Character());

export default () => <div>{value}</div>