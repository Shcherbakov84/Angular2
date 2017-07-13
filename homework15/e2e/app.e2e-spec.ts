import { Homework15Page } from './app.po';

describe('homework15 App', () => {
  let page: Homework15Page;

  beforeEach(() => {
    page = new Homework15Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
