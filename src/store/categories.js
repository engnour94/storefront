
let initialState = {
    categories: [
      {
        normalizedName: 'ALL',
        displayName: '',
        description: ''
      },
      {
        normalizedName: 'FOOD',
        displayName: 'FOOD',
        description: 'Eat as much as you can'
      },
      {
        normalizedName: 'ELECTRONICS',
        displayName: 'ELECTRONICS',
        description: 'Keep up to date with us!'
      }
    ],
    activeCategory:{}
  };
  
  export default function categoriesReducer(state = initialState, action) {
    let { type, payload } = action;
  
    switch (type) {
      case 'ACTIVE_CATEGORY':
        let activeCategory = state.categories.filter(
          (category) => category.normalizedName === payload
        );
        return { ...state, activeCategory: activeCategory[0] };
  
        case 'ALL_CATEGORIES':
        return initialState;
  
      default:
        return state;
    }
  }
  
  // export const activeCategory = (activeCategoryName) => {
  //   return {
  //     type: 'ACTIVE_CATEGORY',
  //     activeCategoryName
  //   };
  // };


  