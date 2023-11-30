import { useUsers } from './use.characters';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../model/user';
import { Storage } from '../services/storage';
import { ApiRepo } from '../services/api.repo';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

const mockLoginUser = {} as LoginUser;
const mockNewUser = {} as FormData;
describe('Given useUsers Hook', () => {
  const TestComponent = () => {
    const { makeLogOut, login, loginWithToken, register } = useUsers();

    return (
      <>
        <button onClick={() => makeLogOut()}></button>
        <button onClick={() => login(mockLoginUser)}> </button>
        <button onClick={() => loginWithToken()}> </button>
        <button onClick={() => register(mockNewUser)}> </button>
      </>
    );
  };

  let elements: HTMLElement[];

  beforeEach(() => {
    render(<TestComponent></TestComponent>);
    elements = screen.getAllByRole('button');
  });

  describe('When we click button makeLogOut', () => {
    test('Then the dispacht should have been called', async () => {
      await userEvent.click(elements[0]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When we click button login', () => {
    test('Then the dispacht should have been called', async () => {
      await userEvent.click(elements[1]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When we click button loginWithToken', () => {
    test('Then the dispacht should have been called', async () => {
      Storage.prototype.get = jest.fn().mockReturnValue('test');

      await userEvent.click(elements[2]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When we click button register ', () => {
    test('Then the dispacht should have been called', async () => {
      ApiRepo.prototype.registerUser = jest.fn();

      await userEvent.click(elements[3]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
