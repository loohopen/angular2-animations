import { AnimationPage } from './app.po';

describe('animation App', () => {
  let page: AnimationPage;

  beforeEach(() => {
    page = new AnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
