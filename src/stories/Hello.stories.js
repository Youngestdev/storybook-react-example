import React from 'react';
import Hello, { StateExample } from '../components/Hello';

export default {
    title: 'Hello Story',
    component: Hello
}

export function HelloJoe() {
    return (
        <Hello name="Jo Doe" />
    )
}

export function TestUser() {
    return (
        <Hello name="Test User" />
    )
}

export function NotLoading() {
    return (
        <StateExample />
    )
}

export function Loading() {
    return (
        <StateExample loading={true} />
    )
}