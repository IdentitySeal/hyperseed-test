import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { computeService } from './utils/compute';


it('renders correctly ', () => {
  const wrapper =   render(<App />);

  expect((wrapper)).toMatchSnapshot();
});

describe('Testing Utils Opertions', () => {
  it('should equal 4',()=>{
     expect(computeService.addXandY({x:2,y:2})).toBe(4);
    })

  test('It should equal 12', () => {
    expect(computeService.multiplyXandY({x:2,y:6})).toBe(12);
  }) 

  test('It should equal 1', () => {
    expect(computeService.powerXtoY({x:4,y:5})).toBe(1);
  }) 
});
