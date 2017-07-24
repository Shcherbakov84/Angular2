import { Test15Page } from './app.po';

describe('test15 App', () => {
  let page: Test15Page;

  beforeEach(() => {
    page = new Test15Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
