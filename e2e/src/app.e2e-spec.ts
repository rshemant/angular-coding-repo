import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to agl-coading-test!');
  });

  it('should display two cards, each one for male and female', () => {
    expect(page.getPetInfoCardsCount()).toBe(2);
    expect(page.getPetInfoCardsHeading()).toEqual(['Male', 'Female']);
  });

  it('should display pet list on pet info cards', () => {
    expect(page.getListPresentStatus()).toBeTruthy();
  });
});
