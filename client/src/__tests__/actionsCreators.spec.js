import moxios from 'moxios';
import MockAdapter from 'jest-mock-axios';
import { changeSearchTerm, fetchPeople, receivePeople } from '../redux/actionCreators';
import people from './dummyData.json';


test('changeSearchTerm', () => {
  expect(changeSearchTerm('term')).toMatchSnapshot();
});

test('receivePeople', () => {
  expect(receivePeople(people)).toMatchSnapshot();
});

test('fetchPeople', (done) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    fetchPeople()(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: people,
        })
        .then(() => {
          expect(request.url).toEqual('api/v1/people');
          expect(dispatchMock).toBeCalledWith(receivePeople(people));
          done();
        })
        .catch(done.fail);
    });
  });
});
