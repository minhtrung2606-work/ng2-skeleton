import { Ng2SkeletonPage } from './app.po';

describe('ng2-skeleton App', () => {
  let page: Ng2SkeletonPage;

  beforeEach(() => {
    page = new Ng2SkeletonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
