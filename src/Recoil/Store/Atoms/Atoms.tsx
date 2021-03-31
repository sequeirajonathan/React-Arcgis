import {atom} from 'recoil';

export const tokenState = atom({
    key: 'tokenState',
    default: '',
});

export const mapViewState = atom({
    key: 'mapViewState',
    default: false,
});