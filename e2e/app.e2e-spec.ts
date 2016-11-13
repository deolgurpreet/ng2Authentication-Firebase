import { SampleNg2AuthenticationPage } from './app.po';

describe('sample-ng2-authentication App', function() {
  let page: SampleNg2AuthenticationPage;

  beforeEach(() => {
    page = new SampleNg2AuthenticationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
