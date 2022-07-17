import { Action, createReducer, on } from '@ngrx/store';
import { UserAuth } from 'src/app/models/users.model';
import * as FeatureLoginActions from './login.actions';

export const featureLoginFeatureKey = 'featureLogin';

export interface State {
  user:UserAuth
}

export const initialState: State = {
  user:{
    id:0,
    username:'',
    password:'',
    admin:false,
    nombre:'',
    apellido:''
  }
};

export const reducer = createReducer(
  initialState,

  on(FeatureLoginActions.loadFeatureLogins, state => state),
  on(FeatureLoginActions.loadFeatureLoginsSuccess, (state, {user}) =>{
    return {...state,user}
  }),
  on(FeatureLoginActions.loadFeatureLoginsFailure, (state, action) => state),

);
