import { orderKey, OrderState } from '../../order/state/order.state';
import { authKey, AuthState } from '../auth/state/auth.state';
import { uiKey, UIState } from '../ui/state/ui.state';

export interface AppState {
  [authKey]: AuthState;
  [uiKey]: UIState;
  [orderKey]: OrderState;
}
