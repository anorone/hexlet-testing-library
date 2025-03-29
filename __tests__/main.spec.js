// @ts-check

import { test, expect, beforeEach, afterEach } from 'vitest';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { TicTacToe } from '@hexlet/tic-tac-toe';

let user;

beforeEach(() => {
  const game = new TicTacToe(document.body);
  game.start();
  user = userEvent.setup();
});

afterEach(() => {
  document.body.innerHTML = '';
})

test('tic-tac-toe', async () => {
  const input1 = screen.getByLabelText('Player 1');
  const input2 = screen.getByLabelText('Player 2');
  await user.type(input1, 'Joe');
  await user.type(input2, 'Bo');
  const submitButton = screen.getByText('Start Game');
  await user.click(submitButton);
  expect(document.body).toHaveTextContent('Joe, you are up!');
});
