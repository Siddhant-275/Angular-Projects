import { FlightBookingPage } from './app.po';

describe('flight-booking App', function() {
  let page: FlightBookingPage;

  beforeEach(() => {
    page = new FlightBookingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
