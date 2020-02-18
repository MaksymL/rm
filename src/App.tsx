import React from 'react';
enum possibeValues {
    'a',
    'c',
    'b' = 'bbbbb'
}

const value: possibeValues[] = [possibeValues.b];


export default () => <div>{value}</div>