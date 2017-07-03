import { AngularFundamentalsPage } from './app.po';

describe('angular-fundamentals App', () => {
  let page: AngularFundamentalsPage;

  beforeEach(() => {
    page = new AngularFundamentalsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
