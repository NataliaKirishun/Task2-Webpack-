import React from 'react';
import { shallow } from 'enzyme';
import Detail from './Detail';

describe('Detail Snapshot', () => {
  it('Deatil Component should render correctly with given props', () => {
    const targetFilm = {
      id: 423,
      title: 'The Pianist',
      tagline: 'Music was his passion. Survival was his masterpiece.',
      vote_average: 8.1,
      vote_count: 2571,
      release_date: '2002-09-24',
      poster_path: 'https://image.tmdb.org/t/p/w500/iunmxWkOi7Vk17Ob3G2HwwjgHsr.jpg',
      overview: "The true story of pianist Wladyslaw Szpilman's ",
      budget: 35000000,
      revenue: 120072577,
      genres: ['Drama', 'War'],
      runtime: 150,
    };
    const searchButtonHandler = jest.fn();
    const component = shallow(<Detail targetFilm={targetFilm} searchButtonHandler={searchButtonHandler} />);
    expect(component).toMatchSnapshot();
  });
});
