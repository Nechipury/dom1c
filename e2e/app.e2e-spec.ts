import { Dom1cPage } from './app.po';

describe('dom1c App', () => {
  let page: Dom1cPage;

  beforeEach(() => {
    page = new Dom1cPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
