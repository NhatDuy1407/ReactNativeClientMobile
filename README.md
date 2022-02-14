# ReactNativeClientMobile

# What I did

- Structure (Modular)
- Navigation
- State Management using Redux
- AsyncStorage

# File Structure

### Overview

├── src
│ ├── \_\_mocks\_\_
│ ├── app
| | ├── core
| | | ├── auth
| | | ├── models
| | | ├── storage
| | | ├── services
| | | ├── store
| | | ├── ui
| | | ├── coreModuleA, coreModuleB
| | ├── shared
| | ├── _feature-modules_
| | ├── theme
| | ├── types
| | ├── ultis
│ ├── assets
│ ├── config
│ ├── i18n

### Feature structures

Every feature should have:
_*Note: Included core, shared, etc.*_

├── feature
│ ├── components _(dump - stateless)_
│ ├── containers _(smart - stateful, don't write logic here, only for UI styles, UI views)_
│ ├── state _(selectors, reducer, state, actions)_
│ ├── services (logic here)
│ ├── navigation (feature routes structure)
│ ├── types
│ ├── ultils

# State Management

### Core Structure

├── store
│ ├── auth
│ │ ├── auth.state.ts _(define 'auth' state alias, Auth state model, initial auth state)_
│ │ ├── auth.reducer.ts _(define 'auth' reducer by using createReducer or createSlice)_
│ │ ├── auth.actions.ts _(define 'auth' actions by using createAction to synchonous action and using createAsyncThunk to async action, call services to do logic or dispatch new action)_
│ │ ├── auth.selectors.ts _(define selectors)_
│ ├── ui
│ ├── home
│ ├── feature _(example for feature which has multiple sub features)_
│ │ ├── feature.state.ts
│ │ ├── feature.reducer.ts _(combineReducers - sub feature reducers)_
│ │ ├── feature.actions.ts
│ │ ├── feature.selectors.ts
│ │ ├── sub-feature
│ │ │ ├── sub-feature.state.ts
│ │ │ ├── sub-feature.reducer.ts _(createSlice or createReducer or combineReducers - sub sub feature reducers)_
│ │ │ ├── sub-feature.actions.ts
│ │ │ ├── sub-feature.selectors.ts

# Navigation Structure

├── InitialNavigator
│ ├── SplashScreenContainer
│ ├── MainNavigator
│ │ ├── LoginContainer
│ │ ├── NotFoundContainer
│ │ ├── TabNavigator
│ │ │ ├── HomeNavigator
│ │ │ │ ├── HomeContainer
│ │ │ │ ├── CartContainer
│ │ │ ├── OtherNavigator
│ │ │ │ ├── OtherContainer
│ │ │ │ ├── AboutContainer
│ │ │ ├── OrderNavigator
│ │ │ │ ├── OrderContainer
│ │ │ │ ├── CartContainer
│ │ │ │ ├── CategoriesContainer

# Internationalization

# Testing

Make Sure that everything is tested including the initialState, all reducers, all actions and all selectors are all tested.

NOTE: \*.Test.tsx files are missing, you need to create them

# Git Hooks

- Using husky
- pre-commit
- commentlint
