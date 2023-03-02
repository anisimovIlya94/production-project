export function createReducerManager(initialReducers) {
    // Создайте объект, который сопоставляет ключи с редукторами
    const reducers = { ...initialReducers }
  
    // Создайте начальный комбинированный редуктор
    let combinedReducer = combineReducers(reducers)
  
    // Массив, который используется для удаления ключей состояния при удалении редукторов
    let keysToRemove = []
  
    return {
      getReducerMap: () => reducers,
  
      // Функция корневого reducer, предоставляемая этим объектом
      // Это будет передано в store
      reduce: (state, action) => {
        // Если какие-либо редукторы были удалены, сначала очистите их состояние
        if (keysToRemove.length > 0) {
          state = { ...state }
          for (let key of keysToRemove) {
            delete state[key]
          }
          keysToRemove = []
        }
  
        // Делегировать комбинированному редуктору
        return combinedReducer(state, action)
      },
  
      // Добавляет новый редуктор с указанным ключом
      add: (key, reducer) => {
        if (!key || reducers[key]) {
          return
        }
  
        // Добавьте редуктор к отображению редуктора
        reducers[key] = reducer
  
        // Generate a new combined reducer
        combinedReducer = combineReducers(reducers)
      },
  
      // Удаляет редуктор с помощью указанного ключа
      remove: key => {
        if (!key || !reducers[key]) {
          return
        }
  
        // Удалите его из сопоставления редуктора
        delete reducers[key]
  
        // Добавьте ключ в список ключей для очистки
        keysToRemove.push(key)
  
        // Создайте новый комбинированный редуктор
        combinedReducer = combineReducers(reducers)
      }
    }
  }
  
  const staticReducers = {
    users: usersReducer,
    posts: postsReducer
  }
  
  export function configureStore(initialState) {
    const reducerManager = createReducerManager(staticReducers)
  
    // Создайте хранилище с функцией root reducer, предоставляемой менеджером.
    const store = createStore(reducerManager.reduce, initialState)
  
    // Необязательно: Разместите диспетчер редукторов в хранилище, чтобы к нему был легкий доступ.
    store.reducerManager = reducerManager
  }