import { DashboardRoutingModule } from './dashboard-routing.module';

describe('DashboardRoutingModule', () => {
  let dashboardRoutingModule: DashboardRoutingModule;

  beforeEach(() => {
    dashboardRoutingModule = new DashboardRoutingModule();
  });

  it('should create an instance', () => {
    expect(dashboardRoutingModule).toBeTruthy();
  });
});
