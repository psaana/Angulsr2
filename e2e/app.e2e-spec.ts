import { MyApp6Page } from './app.po';

describe('my-app6 App', () => {
  let page: MyApp6Page;

  beforeEach(() => {
    page = new MyApp6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
