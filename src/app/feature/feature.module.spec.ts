import { FeatureModule } from './feature.module';

describe('FeatureModule', () => {
  let featureModule: FeatureModule;

  beforeEach(() => {
    featureModule = new FeatureModule();
  });

  it('should create an instance', () => {
    expect(featureModule).toBeTruthy();
  });
});
