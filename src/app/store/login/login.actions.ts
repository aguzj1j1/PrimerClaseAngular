import { createAction, props } from '@ngrx/store';
import { UserAuth } from 'src/app/models/users.model';

export const loadFeatureLogins = createAction(
  '[FeatureLogin] Load FeatureLogins'
);

export const loadFeatureLoginsSuccess = createAction(
  '[FeatureLogin] Load FeatureLogins Success',
  props<{ user:UserAuth }>()
);

export const loadFeatureLoginsFailure = createAction(
  '[FeatureLogin] Load FeatureLogins Failure',
  props<{ error: any }>()
);
