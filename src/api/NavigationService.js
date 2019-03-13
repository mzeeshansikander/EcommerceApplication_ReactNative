import { NavigationActions} from 'react-navitaion';

let _navigator;

function setTopLevelNavigaor(ref){
    _navigator = ref;
}

function navigate(routeName,params){
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        }),
    );
}

function back(){
    _navigator.dispatch(NavigationActions.back());

}
function popToTop(immediate = true){
    _navigator.dispatch({
        type: NavigationActions.POP_TO_TOP,
        immediate,
    });
}
function reset({actions,index}){
    _navigator.dispatch({
        type: NavigationActions.RESET,
        index,
        actions,
    });
}
export const NavigationService = {
    navigate,
    setTopLevelNavigaor,
    back,
    popToTop,
    reset,
    navigator: _navigator

}
window.NavigationService = NavigationService;