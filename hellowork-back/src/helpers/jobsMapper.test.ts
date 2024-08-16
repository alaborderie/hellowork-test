import {test, expect} from 'bun:test';
import {mapJobs} from './jobsMapper';

const mockedSearchResponse = {
  code: 200,
  message: 'OK',
  data: {
    total: 24,
    ads: [
      {
        id: '',
        link: '',
        title: '',
        description: '',
        publicationDate: '',
        coordinates: '',
        city: '',
        postalCode: '',
        department: '',
        region: '',
        sector: '',
        jobtitle: '',
        company: '',
        contractType: [],
        salary: ''
      }
    ]
  }
};

test('jobs mapper', () => {
  expect(mapJobs(mockedSearchResponse)).toStrictEqual({
    total: 24,
    jobs: mockedSearchResponse.data.ads
  });
});
